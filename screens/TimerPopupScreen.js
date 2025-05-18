import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

export default function TimerPopupScreen({ navigation }) {
  const [milliseconds, setMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setMilliseconds(prev => prev + 100);
      }, 100);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setMilliseconds(0);
    setLaps([]);
    setRunning(false);
  };

  const recordLap = () => {
    setLaps(prev => [...prev, milliseconds]);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10); // zecimi de secundă
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer cu Milisecunde</Text>
      <Text style={styles.time}>{formatTime(milliseconds)}</Text>

      <View style={styles.buttonRow}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pauză" onPress={pauseTimer} />
        <Button title="Reset" onPress={resetTimer} />
        <Button title="Lap" onPress={recordLap} />
      </View>

      <FlatList
        data={laps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.lapText}>Lap {index + 1}: {formatTime(item)}</Text>
        )}
      />

      <Button title="Înapoi" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 26, textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#333' },
  time: { fontSize: 48, textAlign: 'center', marginVertical: 30, fontWeight: 'bold', color: '#007AFF' },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  lapText: { fontSize: 18, textAlign: 'center', marginVertical: 6, color: '#555' },
});

