import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TimerPopupScreen from './screens/TimerPopupScreen';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import AddMealScreen from './screens/AddMealScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutHistoryScreen from './screens/WorkoutHistoryScreen';
import StepCounterScreen from './screens/StepCounterScreen';
import BMIScreen from './screens/BMIScreen';
import PlanuriScreen from './screens/PlanuriScreen';
import MealListScreen from './screens/MealListScreen';
import RankMyLiftsScreen from './screens/RankMyLifts'; // import corect ecran RankMyLifts

import { WorkoutProvider } from './context/WorkoutContext';
import { MealProvider } from './context/MealContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WorkoutProvider>
      <MealProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WorkoutHistory" component={WorkoutHistoryScreen} />
            <Stack.Screen name="StepCounter" component={StepCounterScreen} />
            <Stack.Screen name="BMI" component={BMIScreen} />
            <Stack.Screen name="Planuri" component={PlanuriScreen} />
            <Stack.Screen name="TimerPopup" component={TimerPopupScreen} />
            <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} />
            <Stack.Screen name="AddMeal" component={AddMealScreen} />
            <Stack.Screen name="MealList" component={MealListScreen} />
            <Stack.Screen name="RankMyLifts" component={RankMyLiftsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MealProvider>
    </WorkoutProvider>
  );
}
