import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import BIENVENIDA_2 from './Bienvenida_2.jsx'
import BIENVENIDA_3 from './Bienvenida_3.jsx'
import BIENVENIDA_4 from './Bienvenida_4.jsx'

const Tab = createMaterialTopTabNavigator();
const BienvenidaTab = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false, // Ocultar los nombres de las pantallas en la barra de navegación
        }}>
            <Stack.Screen name="BIENVENIDA_2" component={BIENVENIDA_2} options={{ headerShown: false }} />
            <Stack.Screen name="BIENVENIDA_3" component={BIENVENIDA_3} options={{ headerShown: false }} />
            <Stack.Screen name="BIENVENIDA_4" component={BIENVENIDA_4} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export default BienvenidaTab