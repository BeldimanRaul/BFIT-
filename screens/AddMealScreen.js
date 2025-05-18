import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { MealContext } from '../context/MealContext';

export default function AddMealScreen({ navigation }) {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const { addMeal } = useContext(MealContext);

  const saveMeal = () => {
    if (!meal || !calories || isNaN(calories)) {
      Alert.alert("Eroare", "Introdu numele mesei și numărul de calorii (numeric).");
      return;
    }

    addMeal(meal, calories);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>🍽️ Adaugă Masă</Text>
          <TextInput
            placeholder="Nume masă"
            style={styles.input}
            value={meal}
            onChangeText={setMeal}
          />
          <TextInput
            placeholder="Calorii"
            style={styles.input}
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />
          <TouchableOpacity style={styles.button} onPress={saveMeal}>
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
  title: { fontSize: 28, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
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
    backgroundColor: '#34c759',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#34c759',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
