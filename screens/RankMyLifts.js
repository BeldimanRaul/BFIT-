import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import {
  colors,
  containerStyle,
  textStyles,
  inputStyles,
  pickerStyles,
} from '../theme';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const exercises = [
  { label: 'Împins la piept', key: 'bench' },
  { label: 'Genoflexiune', key: 'squat' },
  { label: 'Deadlift', key: 'deadlift' },
];

const thresholds = {
  bench: { sub: 40, med: 80 },
  squat: { sub: 50, med: 100 },
  deadlift: { sub: 60, med: 120 },
};

export default function RankMyLiftsScreen() {
  const [exercise, setExercise] = useState('bench');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState(null);

  const estimateOneRepMax = (w, r) => (r === 1 ? w : w * (1 + r / 30));

  const calculateRank = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0) {
      Alert.alert('Eroare', 'Te rog introdu valori valide pentru greutate și repetări.');
      return;
    }

    const oneRepMax = estimateOneRepMax(w, r);

    if (oneRepMax < thresholds[exercise].sub) {
      setResult('Sub medie');
    } else if (oneRepMax < thresholds[exercise].med) {
      setResult('La medie');
    } else {
      setResult('Peste medie');
    }
  };

return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={containerStyle}>
      <Text style={textStyles.title}>Sunt vânjos ?</Text>

      <Text style={textStyles.label}>Alege exercițiul:</Text>
      <Picker
        selectedValue={exercise}
        onValueChange={(itemValue) => setExercise(itemValue)}
        style={pickerStyles.base}
      >
        {exercises.map((ex) => (
          <Picker.Item key={ex.key} label={ex.label} value={ex.key} />
        ))}
      </Picker>

      <Text style={textStyles.label}>Greutate (kg):</Text>
      <TextInput
        style={inputStyles.base}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        placeholder="Ex: 80"
      />

      <Text style={textStyles.label}>Repetări:</Text>
      <TextInput
        style={inputStyles.base}
        keyboardType="numeric"
        value={reps}
        onChangeText={setReps}
        placeholder="Ex: 5"
      />

      <Button title="Calculează" onPress={calculateRank} />

      {result && (
        <Text style={textStyles.result}>
          Rezultat: <Text style={{ fontWeight: 'bold' }}>{result}</Text>
        </Text>
      )}
    </View>
  </TouchableWithoutFeedback>
);

}
