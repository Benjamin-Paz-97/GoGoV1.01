import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const VerificationCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [message, setMessage] = useState('');
    const [fadeAnim] = useState(new Animated.Value(1));
    const navigation = useNavigation();

    const verifyCode = () => {
        const enteredCode = code.join('');
        if (enteredCode === '1234') {
            setMessage('Código verificado exitosamente');
            navigation.navigate('C_B');
        } else {
            setMessage('Código incorrecto');
        }
    };

    useEffect(() => {
        if (message) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true,
            }).start(() => {
                setMessage('');
                fadeAnim.setValue(1);
            });
        }
    }, [message]);

    const handleChangeCode = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };
    return (
        <ImageBackground
            source={require('./assets/Pedir_numero.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 28, marginBottom: 20, color: '#FFFFFF', position: 'absolute', top: '10%' }}>
                    Ingrese el código de 4 dígitos que se le envió a:
                </Text>
                <View style={{ flexDirection: 'row', position: 'absolute', top: '40%' }}>
                    {code.map((digit, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                marginRight: 30,

                            }}
                        >
                            <TextInput
                                value={digit}
                                onChangeText={(value) => handleChangeCode(index, value)}
                                maxLength={1}
                                keyboardType="numeric"
                                style={{
                                    width: 40,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#FFFFFF',
                                    color: '#FFFFFF',
                                    fontSize: 40,
                                    textAlign: 'center',
                                }}
                            />
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#181335',
                        borderRadius: 10,
                        padding: 10,
                        width: 200,
                        alignItems: 'center',
                        position: 'absolute',
                        top: '60%',
                    }}
                    onPress={verifyCode}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Continuar</Text>
                </TouchableOpacity>
                <Animated.Text
                    style={{
                        marginTop: 30,
                        opacity: fadeAnim,
                        color: '#FFFFFF',
                        position: 'absolute',
                        top: '80%',
                    }}
                >
                    {message}
                </Animated.Text>
            </View>
        </ImageBackground>
    );
};

export default VerificationCode;