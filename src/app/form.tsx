import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useWelcomeForm } from "../hooks/useWelcomeForm";
import { createItem } from "../services/items.service";
import { theme } from "../constants/theme";
export default function FormScreen() {
  const { title, description, setTitle, setDescription, reset } =
    useWelcomeForm();
  async function handleSubmit() {
    if (!title.trim() || !description.trim()) return;
    await createItem({ title, description });
    reset();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario simple</Text>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textarea]}
        multiline
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
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
    marginBottom: 12,
  },
  textarea: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
