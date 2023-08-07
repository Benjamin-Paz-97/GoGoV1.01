import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = ({ navigation }) => {
    const handleNextScreen = () => {        
        navigation.navigate('BIENVENIDA_3');
    };
    const handleBackButton = () => {
        navigation.goBack(); // Regresar a la pantalla anterior
    };
    return (
        <ImageBackground source={require('../assets/bienvenida2_GoGo.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBackButton} style={styles.arrowButton}>
                    <Icon name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <View style={[styles.messageContainer, { justifyContent: 'flex-end', alignItems: 'flex-start' }]}>
                    <Text style={styles.message}>Brindamos servicios profesionales de taxi para usted y su Familia</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingBottom: 190,
    },
    messageContainer: {
        flex: 1,
        paddingHorizontal: 50,
    },
    message: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 10)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#181335',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    arrowButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        paddingVertical: 20,
    },
});

export default HomeScreen;