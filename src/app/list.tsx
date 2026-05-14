import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getItems } from "../services/items.service";
import { Item } from "../types/item";
import { ItemCard } from "../components/ItemCard";
import { theme } from "../constants/theme";
export default function ListScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando listado...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de ejemplo</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            description={item.description}
            priority={item.priority}
          />
        )}
      />
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
});
