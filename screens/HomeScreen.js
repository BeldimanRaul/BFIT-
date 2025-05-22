import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>BFIT</Text>

      <Text style={styles.sectionTitle}>Antrenamente</Text>
      <CustomButton title="Istoric Antrenamente" onPress={() => navigation.navigate('WorkoutHistory')} />
      <CustomButton title="Planuri Antrenament" onPress={() => navigation.navigate('Planuri')} />
      <CustomButton title="Adaugă Antrenament" onPress={() => navigation.navigate('AddWorkout')} />
      <CustomButton title="Numără Pași" onPress={() => navigation.navigate('StepCounter')} />
      <CustomButton title="Sunt vânjos ?" onPress={() => navigation.navigate('RankMyLifts')} /> 

      <Text style={styles.sectionTitle}>Alimentatie</Text>
      <CustomButton title="Adaugă Masă" onPress={() => navigation.navigate('AddMeal')} />
      <CustomButton title="Mese Salvate" onPress={() => navigation.navigate('MealList')} />

      <Text style={styles.sectionTitle}>Altele</Text>
      <CustomButton title="Calculator BMI" onPress={() => navigation.navigate('BMI')} />
      <CustomButton title="Deschide Timer" onPress={() => navigation.navigate('TimerPopup')} />
    </ScrollView>
  );
}

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f4f8',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 14,
    color: '#555',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0a84ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#0a84ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
