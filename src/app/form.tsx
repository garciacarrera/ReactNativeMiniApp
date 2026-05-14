import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

import { createItem } from "../services/items.service";
import { theme } from "../constants/theme";
import { useItemForm } from "../hooks/useItemForm.ts";

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