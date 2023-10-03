import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n.js';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules'; // Importa el polyfill


// Importa los archivos de idioma
import enTranslations from '../../Locales/en.json';
import esTranslations from '../../Locales/es.json';
// Configura i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            es: {
                translation: esTranslations,
            },
        },
        lng: 'en', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });
const resources = {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
};
function LoginScreen() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [State, setState] = useState({
        Dni: "",
        Telefono: "",
        Contrasena: "",
    });
    const [isChecked, setIsChecked] = useState(false);

    const handleChangeText = (dato, value) => {
        setState({ ...State, [dato]: value });
    }

    const SaveNewUser = async () => {
        if (State.Dni === '') {
            alert(t('Please enter a DNI'));
        } else if (State.Telefono === '') {
            alert(t('Please enter a phone number'));
        } else if (State.Contrasena === '') {
            alert(t('Please enter your password'));
        } else {
            try {
                alert(t('Successfully saved'));
            } catch (error) {
                alert(t('Error while saving') + ': ' + error.message);
            }
        }
    };

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
    };

    return (
        <ImageBackground
            source={require('../assets/Registro.png')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <TouchableOpacity style={styles.languageButton} onPress={() => handleLanguageChange(currentLanguage === 'en' ? 'es' : 'en')}>
                <Text style={styles.languageButtonText}>{t('Change Language')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.checkButton, isChecked && styles.checkedButton]}
                onPress={() => setIsChecked(!isChecked)}
            >
                <Text style={styles.checkButtonText}>✓</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.0)' }}
                behavior="padding"
            >
                <Text style={styles.title}>{t('Register new user')}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={t('DNI')}
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(value) => handleChangeText('Dni', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={t('Phone number')}
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(value) => handleChangeText('Telefono', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={t('Password')}
                        placeholderTextColor="#FFFFFF"
                        onChangeText={(value) => handleChangeText('Contrasena', value)}
                        secureTextEntry
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => SaveNewUser()}>
                    <Text style={styles.loginButtonText}>{t('REGISTER')}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 20,
        color: '#FFFFFF',
    },
    inputContainer: {
        marginBottom: 20,
        width: '80%',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        color: '#FFFFFF',
    },
    loginButton: {
        backgroundColor: '#181335',
        borderRadius: 10,
        padding: 12,
        width: 200,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    languageButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
    },
    languageButtonText: {
        color: '#FFFFFF',
    },
    checkButtonText: {
        color: 'green'
    }
});

export default LoginScreen;
