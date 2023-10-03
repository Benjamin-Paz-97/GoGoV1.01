import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistroScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginPress = () => {
        // Aquí puedes agregar la lógica para el inicio de sesión
        // Por ejemplo, navegación a la siguiente pantalla
    };

    return (
        <ImageBackground
            source={require('./assets/Registro_6.png')} // Cambia la ruta a tu imagen de fondo
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    {/* Icono de flecha hacia atrás */}
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Registro</Text>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Estás a unos clicks de pertenecer a nuestra familia</Text>
                    <Text style={styles.messageBold}>Familia</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
                {nombre.length === 0 && <Text style={styles.gogoMessage}>GoGo</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.passwordToggle}>
                    <Text>{showPassword ? '•••' : 'Mostrar'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLoginPress}
                    style={[styles.loginButton, { backgroundColor: showPassword ? 'red' : 'blue' }]}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('IniciarSesion')}>
                    <Text style={styles.signInLink}>¿Ya tienes cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.5, // Ajusta la opacidad según lo desees
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    backButtonText: {
        fontSize: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    messageContainer: {
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
    },
    messageBold: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 2,
        borderColor: 'navy',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    gogoMessage: {
        alignSelf: 'flex-start',
        color: 'blue',
        marginBottom: 5,
    },
    passwordToggle: {
        marginTop: 5,
    },
    loginButton: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
    },
    signInLink: {
        marginTop: 20,
        color: 'blue',
    },
});

export default RegistroScreen;
