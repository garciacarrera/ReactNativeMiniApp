import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { theme } from "../constants/theme";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase 4 · Arquitectura aplicada</Text>
      <Text style={styles.subtitle}>
        Esta mini app muestra screens, components, hooks, services y navegación.
      </Text>
      <Link href="/list" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir al listado</Text>
        </Pressable>
      </Link>
      <Link href="/form" asChild>
        <Pressable style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>Ir al formulario</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: theme.colors.text,
    marginBottom: 12,
  },
  subtitle: {
    color: theme.colors.muted,
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#e2e8f0",
  },
  secondaryButtonText: {
    color: theme.colors.text,
    fontWeight: "700",
    textAlign: "center",
  },
});
