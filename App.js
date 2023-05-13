import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TelaInicial from './telas/telaInicial';
import Satelite from './telas/telaRastreador';
import Meteoros from './telas/telaMeteoros';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = "TelaInicial" component = {TelaInicial}/>
        <Stack.Screen name = "Meteoros" component = {Meteoros}/>
        <Stack.Screen name = "Satelite" component = {Satelite}/>

      </Stack.Navigator>
   </NavigationContainer>
  );
}


