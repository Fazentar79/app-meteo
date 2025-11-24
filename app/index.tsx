import DateTime from "@/components/Date";
import ThemedText from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import useWeather from "@/hooks/useWeather";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const Colors = useThemeColors();
  const { city, data, loading, error, coords } = useWeather();

  if (loading) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: Colors.background }]}
      >
        <ThemedText variant="body" color="text">
          Loading...
        </ThemedText>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: Colors.background }]}
      >
        <ThemedText variant="body" color="text">
          Error: {error}
        </ThemedText>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors.background }]}
    >
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/sort.png")}
          style={{ width: 40, height: 40 }}
        />
        <ThemedText variant="title" color="text">
          {city}
        </ThemedText>
        <Image
          source={require("@/assets/images/search.png")}
          style={{ width: 36, height: 36 }}
        />
      </View>
      <View style={styles.temperature}>
        <ThemedText variant="temperature" color="text">
          {data?.current.temperature_2m} °C
        </ThemedText>
      </View>
      <View style={styles.mainInfos}>
        <Image
          source={require("@/assets/images/sun.png")}
          style={{
            width: 64,
            height: 64,
            alignSelf: "center",
            marginBottom: 16,
          }}
        />

        <View>
          <ThemedText variant="subtitle1" color="text">
            Ensoleillé
          </ThemedText>

          <ThemedText variant="body" color="text">
            {`Hautes: ${data?.daily.temperature_2m_max[0]}°C`}
          </ThemedText>
          <ThemedText variant="body" color="text">
            {`Basses: ${data?.daily.temperature_2m_min[0]}°C`}
          </ThemedText>
        </View>
      </View>
      <View style={styles.DateAndHour}>
        <ThemedText variant="body" color="text">
          <DateTime />
        </ThemedText>
      </View>
      <View style={styles.meteoInfos}>
        <View>
          <ThemedText variant="body" color="text">
            <Image
              source={require("@/assets/images/humidite.png")}
              style={{
                width: 16,
                height: 16,
                alignSelf: "center",
                marginRight: 4,
              }}
            />{" "}
            {data?.current.relative_humidity_2m} %
          </ThemedText>
          <ThemedText variant="body" color="text">
            <Image
              source={require("@/assets/images/vent.png")}
              style={{
                width: 16,
                height: 16,
                alignSelf: "center",
                marginRight: 4,
              }}
            />{" "}
            {data?.current.windspeed_10m} km/h
          </ThemedText>
        </View>
        <View>
          <ThemedText variant="body" color="text">
            <Image
              source={require("@/assets/images/pluie.png")}
              style={{
                width: 16,
                height: 16,
                alignSelf: "center",
                marginRight: 4,
              }}
            />{" "}
            10%
          </ThemedText>
          <ThemedText variant="body" color="text">
            <Image
              source={require("@/assets/images/ultra-violet.png")}
              style={{
                width: 16,
                height: 16,
                alignSelf: "center",
                marginRight: 4,
              }}
            />{" "}
            {data?.daily.uv_index_max[0]}
          </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  temperature: {
    alignSelf: "center",
    marginVertical: 16,
    marginTop: 32,
  },
  mainInfos: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginTop: 32,
  },
  DateAndHour: {
    alignItems: "center",
    marginTop: 16,
  },
  meteoInfos: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
