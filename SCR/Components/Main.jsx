import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import BIENVENIDA from './Bienvenida.jsx';
import BIENVENIDA_2 from './Bienvenida_2.jsx'
import BIENVENIDA_3 from './Bienvenida_3.jsx'
import BIENVENIDA_4 from './Bienvenida_4.jsx'
import PEDIR_NUMERO from './Login_Registro/Pnt_PedirNumero.jsx';
import COD_VERIFICACION from './Login_Registro/Cod_Verificacion.jsx'
import C_A from '../Patrones_Diseño/ComponenteA.js'
import C_B from '../Patrones_Diseño/ComponenteB.js'
import { CustomTabBar, SelectedTabBar } from '../Patrones_Diseño/Barra_navegacion.jsx'


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BIENVENIDA" component={BIENVENIDA} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" options={{ headerShown: false }}>
                    {() => (
                        <Tab.Navigator
                            screenOptions={{ // <-- Replace 'tabOptions' with 'screenOptions'
                                tabBarShowLabel: false, // Ocultar los nombres de las pantallas en la barra de navegación
                                tabBarStyle: { elevation: 0 }, // Quitar sombra en Android
                                tabBarStyle: {
                                    display: 'none', // Ocultar completamente la barra de navegación
                                },
                                tabBarButton: () => null, // Ocultar los botones de navegación de la barra
                            }}
                        >
                            <Tab.Screen name="BIENVENIDA_2" component={BIENVENIDA_2} options={{ headerShown: false }} />
                            <Tab.Screen name="BIENVENIDA_3" component={BIENVENIDA_3} options={{ headerShown: false }} />
                            <Tab.Screen name="BIENVENIDA_4" component={BIENVENIDA_4} options={{ headerShown: false }} />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
                <Stack.Screen name="PEDIR_NUMERO" component={PEDIR_NUMERO} options={{ headerShown: false }} />
                <Stack.Screen name="COD_VERIFICACION" component={COD_VERIFICACION} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main
