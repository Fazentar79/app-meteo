import { Current, WeatherMeta } from "@/types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

interface CWCProps {
  current: Current;
  meta: WeatherMeta;
}

export const CurrentWeatherCard = ({ current, meta }: CWCProps) => {
  return (
    <View style={styles.CurrentCard}>
      <ThemedText style={styles.temperature} variant="body" color="text">
        {current.temperature_2m} °C
      </ThemedText>
      <MaterialCommunityIcons name={meta.icon} size={64} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  CurrentCard: {
    paddingVertical: 24,
    borderRadius: 18,
    alignItems: "center",
    gap: 8,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  temperature: {
    alignSelf: "center",
    marginVertical: 16,
    marginTop: 32,
  },
});
