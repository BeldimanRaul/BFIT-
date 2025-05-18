import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { MealContext } from '../context/MealContext';

export default function MealListScreen({ navigation }) {
  const { meals } = useContext(MealContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesele mele</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.calories} cal ({item.time})
          </Text>
        )}
      />
      <Button title="Înapoi" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  item: { fontSize: 16, paddingVertical: 6 },
});
