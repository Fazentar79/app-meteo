import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, type TextProps } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 64,
    lineHeight: 52,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    lineHeight: 20,
  },
  caption: {
    fontSize: 8,
    lineHeight: 12,
  },
  subtitle1: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle3: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "bold",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
};

export default function ThemedText({ variant, color, ...rest }: Props) {
  const Colors = useThemeColors();
  return (
    <Text
      style={[
        styles[variant ?? "body"],
        { color: Colors[color ?? "grayMedium"] },
      ]}
      {...rest}
    />
  );
}
