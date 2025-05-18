import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const plans = [
  {
    title: 'Plan 1: Full Body (3x/săpt.)',
    exercises: [
      { name: 'Genuflexiuni', sets: 3, reps: '12-15' },
      { name: 'Împins la piept', sets: 3, reps: '10-12' },
      { name: 'Ramat cu bara', sets: 3, reps: '10-12' },
      { name: 'Plank', sets: 3, reps: '30-60 sec' },
      { name: 'Fandări', sets: 3, reps: '10/10 picioare' },
    ],
  },
  {
    title: 'Plan 2: Push/Pull/Legs (6x/săpt.)',
    exercises: [
      { name: 'Împins la piept', sets: 4, reps: '8-10' },
      { name: 'Împins deasupra capului', sets: 3, reps: '10-12' },
      { name: 'Triceps extensii', sets: 3, reps: '12-15' },
      { name: 'Tracțiuni', sets: 3, reps: 'maxim' },
      { name: 'Ramat cu gantere', sets: 4, reps: '10-12' },
      { name: 'Genuflexiuni', sets: 4, reps: '12-15' },
      { name: 'Fandări', sets: 3, reps: '10/10 picioare' },
    ],
  },
  {
    title: 'Plan 3: HIIT + Cardio (4x/săpt.)',
    exercises: [
      { name: 'Burpees', sets: 3, reps: '15' },
      { name: 'Jumping jacks', sets: 3, reps: '30 sec' },
      { name: 'Sprinturi', sets: 5, reps: '30 sec / pauză 30 sec' },
      { name: 'Mountain climbers', sets: 3, reps: '30 sec' },
      { name: 'Plank jacks', sets: 3, reps: '30 sec' },
    ],
  },
  {
    title: 'Plan 4: Începători (2x/săpt.)',
    exercises: [
      { name: 'Genuflexiuni', sets: 2, reps: '10' },
      { name: 'Flotări modificate', sets: 2, reps: '8' },
      { name: 'Abdomene', sets: 2, reps: '10' },
      { name: 'Plimbări', sets: 1, reps: '20-30 min' },
      { name: 'Stretching', sets: 1, reps: '10-15 min' },
    ],
  },
  {
    title: 'Plan 5: Upper/Lower Split (4x/săpt.)',
    exercises: [
      { name: 'Împins la piept', sets: 4, reps: '8-10' },
      { name: 'Ramat cu bara', sets: 4, reps: '10-12' },
      { name: 'Împins militar', sets: 3, reps: '10' },
      { name: 'Genuflexiuni', sets: 4, reps: '12' },
      { name: 'Îndreptări', sets: 3, reps: '8-10' },
      { name: 'Ridicări pe vârfuri', sets: 3, reps: '15' },
    ],
  },
];

export default function PlanuriScreen({ navigation }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Planuri de Antrenament</Text>

      {plans.map((plan, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <Text style={styles.planTitle}>{plan.title}</Text>
          </TouchableOpacity>

          {expandedIndex === index && (
            <View style={styles.exerciseList}>
              {plan.exercises.map((exercise, i) => (
                <Text key={i} style={styles.exercise}>
                  • {exercise.name} – {exercise.sets} seturi x {exercise.reps} rep
                </Text>
              ))}
            </View>
          )}

        </View>
      ))}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Înapoi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0a84ff',
  },
  exerciseList: {
    marginTop: 12,
    paddingLeft: 8,
  },
  exercise: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  backButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#666',
  },
});
