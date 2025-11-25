import { Coords, WeatherResponse } from "@/types/types";
import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";

export default function useWeather() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [data, setData] = useState<WeatherResponse | null>(null);

  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    setError(null);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,windspeed_10m,weathercode&daily=sunrise,temperature_2m_min,temperature_2m_max,weather_code,uv_index_max,wind_speed_10m_max,weathercode&timezone=auto`;
      const res = await fetch(url);
      const json = await res.json();
      if (json && json.current && json.daily) {
        setData(json);
      } else {
        throw new Error("Unexpected response shape");
      }
    } catch (error) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  }, []);

  const acquireLocation = useCallback(async () => {
    setLoading(true);
    setError(null);
    // Permissions to access location
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");

      setLoading(false);

      return;
    }
    // Coordinates
    const loc = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = loc.coords;
    setCoords({ latitude, longitude });

    // Reverse geocode
    try {
      const places = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const place = places?.[0];
      setCity([place?.city, place?.region].filter(Boolean).join(", "));
    } catch (error) {
      // Non-critical error: leave city blank
    }

    // Fetch weather data
    await fetchWeather(latitude, longitude);
  }, [fetchWeather]);
  useEffect(() => {
    acquireLocation();
  }, []);

  return { error, loading, coords, city, data };
}
