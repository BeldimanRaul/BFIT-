import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TimerScreen({ navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronometru</Text>
      <Text style={styles.timer}>{seconds}s</Text>
      <Button title="Start" onPress={startTimer} />
      <Button title="Pauză" onPress={pauseTimer} />
      <Button title="Reset" onPress={resetTimer} />
      <Button title="Înapoi" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10, textAlign: 'center' },
  timer: { fontSize: 48, textAlign: 'center', marginVertical: 20 },
});
