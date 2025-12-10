import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import RootNavigator from './navigation/RootNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <BookingProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: '#121212' },
            }}
          >
            <RootNavigator />
          </Stack.Navigator>
        </NavigationContainer>
      </BookingProvider>
    </AuthProvider>
  );
};

export default App;