import React, { createContext, useState } from 'react';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const addMeal = (name, calories) => {
    const newMeal = {
      id: Date.now().toString(),
      name,
      calories,
      time: new Date().toLocaleTimeString(),
    };
    setMeals(prev => [newMeal, ...prev]);
  };

  return (
    <MealContext.Provider value={{ meals, addMeal }}>
      {children}
    </MealContext.Provider>
  );
};
