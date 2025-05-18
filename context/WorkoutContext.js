import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (name, duration, exercitii) => {
    const newWorkout = {
      id: Date.now().toString(),
      name,
      duration,
      exercitii,
      time: new Date().toLocaleString(),
    };
    setWorkouts(prev => [...prev, newWorkout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(prev => prev.filter(workout => workout.id !== id));
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}