import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, ImageBackground, KeyboardAvoidingView, Image } from 'react-native';
import styleText from '../styleText.jsx'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ConfirmacionCodigo = () => {
    const [codigo, setCodigo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [fadeAnim] = useState(new Animated.Value(1));
    const navigation = useNavigation();
    const enviarCodigo = () => {
        if (codigo) {            
            setMensaje('Código enviado exitosamente');
            navigation.navigate('COD_VERIFICACION');
        } else {
            setMensaje('Por favor, introduce un código');
        }
    };
    useEffect(() => {
        if (mensaje) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true,
            }).start(() => {
                setMensaje('');
                fadeAnim.setValue(1);
            });
        }
    }, [mensaje]);

    const handleBackButton = () => {
        navigation.goBack(); // Regresar a la pantalla anterior
    };
    const screenHeight = Dimensions.get('window').height;
    const paddingPercentage = 6; // Porcentaje de padding superior deseado
    const paddingTop = (screenHeight * paddingPercentage) / 100;
    return (
        <ImageBackground
            source={require('./assets/Pedir_numero.png')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.0)' }}
                behavior="padding" // Ajusta la posición de los elementos cuando aparece el teclado
            >
                <TouchableOpacity onPress={handleBackButton} style={styles.arrowButton}>
                    <Icon name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 28, marginTop: -5, marginLeft: -120, color: '#FFFFFF' }}>CONFIRMACIÓN</Text>
                <Text style={{ fontSize: 16, marginTop: 1, marginLeft: 15, color: '#FFFFFF' }}>
                    Introduce tu número de celular para enviarte el código de confirmación
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 100 }}>
                    <Image source={require('./assets/Bandera.jpg')} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize: 18, color: '#FFFFFF' }}>+51</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#FFFFFF', borderBottomEnd: 10, marginLeft: 10 }}>
                        <TextInput
                            placeholder="Introduce tu número"
                            placeholderTextColor="#FFFFFF"
                            value={codigo}
                            onChangeText={text => {
                                // Asegúrate de que solo se ingresen dígitos numéricos
                                const numericValue = text.replace(/[^0-9]/g, '');
                                // Limitar el número de caracteres a 9
                                setCodigo(numericValue.slice(0, 9));
                            }}
                            keyboardType='phone-pad' // Mostrar teclado numérico
                            maxLength={9} // Limitar a 9 caracteres
                            style={{
                                marginBottom: 10,
                                paddingHorizontal: 10,
                                height: 40,
                                color: '#FFFFFF' // Modifica el color del texto introducido por el usuario
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#181335',
                        borderRadius: 10,
                        padding: 10,
                        width: 200,
                        alignItems: 'center',
                        marginTop: 30,
                    }}
                    
                onPress={enviarCodigo}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continuar</Text>
                </TouchableOpacity>
                <Animated.Text
                    style={{
                        marginTop: 30,
                        opacity: fadeAnim,
                        color: '#FFFFFF',
                    }}
                >
                    {mensaje}
                </Animated.Text>
            </KeyboardAvoidingView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styleText.comentarioSinPadding}> Si continúa, puede recibir un</Text>
                <Text style={styleText.comentarioNegrita}> SMS</Text>
                <Text style={styleText.comentarioSinPadding}> para su</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styleText.comentarioNegrita}> Verificación.</Text>
                <Text style={styleText.comentarioSinPadding}>Se pueden aplicar tarifas</Text>
            </View>
            <View>
                <Text style={styleText.comentarioSinPadding}>por mensajes y datos.</Text>
            </View>
        </ImageBackground>
    );
};

export default ConfirmacionCodigo;

const styles = StyleSheet.create({
    arrowButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        paddingVertical: 20,
    },
});