import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';

export default function WorkoutHistoryScreen({ navigation }) {
  const { workouts, deleteWorkout } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Istoric Antrenamente</Text>

      {workouts.length === 0 ? (
        <Text style={styles.empty}>Nu ai antrenamente salvate.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>{item.name} – {item.duration} min</Text>
                  <Text style={styles.itemTime}>({item.time})</Text>
                </View>
                <TouchableOpacity onPress={() => deleteWorkout(item.id)} style={styles.deleteButton}>
                  <Text style={styles.deleteText}>Sterge</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemSubtitle}>Exerciții:</Text>
              {item.exercitii
                .split(/[\n,]+/)
                .map((ex, idx) => (
                  <Text key={idx} style={styles.exerciseItem}>
                    • {ex.trim()}
                  </Text>
                ))}
            </View>
          )}
        />
      )}

      <Button title="Înapoi la Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#333' },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#999',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#e8f0fe',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  itemTime: { fontSize: 14, color: '#666', marginBottom: 5 },
  itemSubtitle: { fontWeight: '600', marginTop: 8, color: '#444' },
  exerciseItem: { fontSize: 15, marginLeft: 10, color: '#333' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ffcccc',
    borderRadius: 8,
  },
  deleteText: {
    fontSize: 16,
    color: '#cc0000',
    fontWeight: '600',
  },
});
