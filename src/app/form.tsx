import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { theme } from "../constants/theme";
import { useItemForm } from "../hooks/useItemForm.ts";
import { createItem } from "../services/items.service";

export default function FormScreen() {
  const form = useItemForm();
  async function handleSubmit() {
    if (!form.isValid) return;
    await createItem({
      title: form.title,
      description: form.description,
      priority: form.priority,
    });
    form.setSubmitted(true);
    form.reset();
  }

  async function cleanInput() {
    if (!form.isValid) return;
    form.reset();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario controlado</Text>
      <TextInput
        placeholder="Título"
        value={form.title}
        onChangeText={form.setTitle}
        style={styles.input}
      />
      {form.titleError ? (
        <Text style={styles.error}>{form.titleError}</Text>
      ) : null}
      <TextInput
        placeholder="Descripción"
        value={form.description}
        onChangeText={form.setDescription}
        style={[styles.input, styles.textarea]}
        multiline
      />
      {form.descriptionError ? (
        <Text style={styles.error}>{form.descriptionError}</Text>
      ) : null}
      <Pressable
        disabled={!form.isValid}
        style={StyleSheet.flatten([
          styles.button,
          !form.isValid && styles.buttonDisabled,
        ])}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </Pressable>
      <Pressable
        style={[styles.button_clean, !form.isValid && styles.buttonDisabled]}
        onPress={cleanInput}
      >
        <Text style={styles.buttonText}>Limpiar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: theme.colors.text,
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 6,
  },
  textarea: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  error: {
    color: "#dc2626",
    marginBottom: 10,
    fontSize: 13,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  button_clean: {
    backgroundColor: theme.colors.muted,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
});
