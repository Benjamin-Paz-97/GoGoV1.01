import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const Go_Bienvenida_2 = () => {
        
        navigation.navigate('Tabs');// Reemplaza 'NextScreen' con el nombre de tu siguiente pantalla
    };
    const screenHeight = Dimensions.get('window').height;
    const paddingPercentage = 4; // Porcentaje de padding superior deseado
    const paddingTop = (screenHeight * paddingPercentage) / 100;

    return (
        <TouchableOpacity style={[styles.container,]} onPress={Go_Bienvenida_2} activeOpacity={1}>
            <ImageBackground source={require('../assets/Bienvenida_GoGo.jpg')} style={styles.backgroundImage}>
                <View style={styles.content}>
                    <Text style={styles.paragraph}>Bienvenido a</Text>
                    <Text style={styles.gogo}>GOGO</Text>
                    <Text style={styles.subtitle}>¡LA MEJOR APLICACIÓN DE RESERVA DE TAXI PARA HACER TU DÍA EXCELENTE!</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    paragraph: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    gogo: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default WelcomeScreen;