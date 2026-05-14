import { View, Text, StyleSheet, Pressable } from "react-native";
import { Item } from "../types/item";
import { theme } from "../constants/theme";

type Props = {
  title: string;
  description: string;
  priority?: "baja" | "media" | "alta";
  onPress?: () => void;
};
export function ItemCard({
  title,
  description,
  priority = "media",
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.priority}>Prioridad: {priority}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  description: {
    color: theme.colors.muted,
    lineHeight: 20,
  },
  priority: {
    marginTop: theme.spacing.sm,
    color: theme.colors.primary,
    fontWeight: "700",
  },
});
