import ThemedText from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const Colors = useThemeColors();

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
          Ville choisie
        </ThemedText>
        <Image
          source={require("@/assets/images/search.png")}
          style={{ width: 36, height: 36 }}
        />
      </View>
      <View style={styles.temperature}>
        <ThemedText variant="temperature" color="text">
          24°C
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
            Haute: 28°C
          </ThemedText>
          <ThemedText variant="body" color="text">
            Basse: 18°C
          </ThemedText>
        </View>
      </View>
      <View style={styles.dateAndHour}>
        <ThemedText variant="body" color="text">
          09:43
        </ThemedText>
        <View>
          <ThemedText variant="body" color="text">
            mar. 4 novembre 2025
          </ThemedText>
        </View>
      </View>
      <View style={styles.meteoInfos}>
        <View>
          <ThemedText variant="body" color="text">
            Humidité: 40%
          </ThemedText>
          <ThemedText variant="body" color="text">
            Vent: 15 km/h
          </ThemedText>
        </View>
        <View>
          <ThemedText variant="body" color="text">
            Précipitations: 10%
          </ThemedText>
          <ThemedText variant="body" color="text">
            Indice UV: 5
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
  dateAndHour: {
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
