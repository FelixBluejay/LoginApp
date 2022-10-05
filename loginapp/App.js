import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main"
import Users from "./components/Users"
import Details from "./components/Details"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false
          }} 
          />
        <Stack.Screen
          name="Users" component={Users}
          options={{
            title: 'Users',
            headerStyle: {
              backgroundColor: '#f48fb1',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen
          name="Details" component={Details}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: '#f48fb1',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
