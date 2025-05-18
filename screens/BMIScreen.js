import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../theme';

export default function BMIScreen({ navigation }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    Keyboard.dismiss(); // închide tastatura

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h || w <= 0 || h <= 0) {
      Alert.alert("Eroare", "Te rog introdu valori valide pentru greutate și înălțime.");
      return;
    }

    const result = w / (h * h);
    setBmi(result.toFixed(2));

    if (result < 18.5) setMessage('Subponderal');
    else if (result < 25) setMessage('Greutate normală');
    else if (result < 30) setMessage('Supraponderal');
    else setMessage('Obez');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}> Calculator BMI</Text>

        <Text style={styles.label}>Greutate (kg)</Text>
        <TextInput
          placeholder="ex: 70"
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <Text style={styles.label}>Înălțime (cm)</Text>
        <TextInput
          placeholder="ex: 175"
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculează</Text>
        </TouchableOpacity>

        {bmi && (
          <View style={styles.resultCard}>
            <Text style={styles.result}>BMI: {bmi}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}> Înapoi</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 36,
    fontWeight: 'bold',
    color: colors.text,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#666',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    fontSize: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultCard: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  result: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  message: {
    fontSize: 18,
    color: '#888',
    marginTop: 8,
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
