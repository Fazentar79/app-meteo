import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

export default function DateTime() {
  const date = new Date();
  const showTime = date.getHours() + date.getMinutes() + date.getSeconds() > 0;
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const dateString = date.toLocaleDateString("fr-FR", options);
  const timeString = showTime
    ? date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : "";
  return (
    <View style={styles.dateAndHour}>
      <ThemedText variant="body" color="text">
        {showTime ? `${timeString}` : ""}
      </ThemedText>
      <ThemedText variant="body" color="text">
        {dateString}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  dateAndHour: {
    alignItems: "center",
    marginTop: 16,
  },
});
