export interface Coords {
  latitude: number;
  longitude: number;
}

export interface WeatherResponse {
  current: Current;
  current_units: Currentunits;
  daily: Daily;
  daily_units: Dailyunits;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface Dailyunits {
  sunrise: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_max: string;
  weather_code: string;
  weathercode: string;
  wind_speed_10m_max: string;
}

export interface Daily {
  sunrise: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  uv_index_max: number[];
  weather_code: number[];
  weathercode: number[];
  wind_speed_10m_max: number[];
}

export interface Currentunits {
  interval: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
  weathercode: string;
  windspeed_10m: string;
}

export interface Current {
  interval: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  windspeed_10m: number;
}
