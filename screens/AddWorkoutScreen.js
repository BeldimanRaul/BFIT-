import React, { useState, useContext } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';

export default function AddWorkoutScreen({ navigation }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [exercitii, setExercitii] = useState('');
  const { addWorkout } = useContext(WorkoutContext);

  const saveWorkout = () => {
    if (!name || !duration || isNaN(duration) || !exercitii) {
      Alert.alert("Eroare", "Completează corect toate câmpurile.");
      return;
    }

    addWorkout(name, duration, exercitii);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}> Adaugă Antrenament</Text>
          <TextInput
            placeholder="Nume"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Durată (minute)"
            style={styles.input}
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />
          <TextInput
            placeholder="Ce exerciții ai făcut?"
            style={[styles.input, { height: 100 }]}
            multiline
            value={exercitii}
            onChangeText={setExercitii}
          />
          <TouchableOpacity style={styles.button} onPress={saveWorkout}>
            <Text style={styles.buttonText}>Salvează</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0a84ff',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#0a84ff',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
