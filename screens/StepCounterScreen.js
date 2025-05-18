import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StepCounterScreen({ navigation }) {
  const [steps, setSteps] = useState(0);

  const addSteps = () => {
    setSteps(prev => prev + 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Numărător Pași</Text>
      <Text style={styles.steps}>{steps} pași</Text>
      <Button title="Adaugă 100 pași" onPress={addSteps} />
      <Button title="Înapoi" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  steps: { fontSize: 42, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#007AFF' },
});

