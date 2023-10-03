import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';

const G_Maps = ({ navigation }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [origin, setOrigin] = useState({
        latitude: -9.298135,
        longitude: -76.000287,
    });
    const handleBackButton = () => {
        navigation.goBack(); // Regresar a la pantalla anterior
    };
    const toggleOptions = () => {
        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'whenInUse', // Cambia según tus necesidades
        });
    };
    const startTime = Date.now();
    const loadGoogleMapsApi = () => {
        // Llamada a la API de Google Maps (ejemplo ficticio)
        // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
        fetch(`https://maps.googleapis.com/maps/api/some_endpoint?key=YOUR_GOOGLE_MAPS_API_KEY`)
            .then(response => response.json())
            .then(data => {

                // Manejo de los datos de la API
            })
            .catch(error => {
                // Manejo de errores
            });
    };
    const getMyLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setOrigin({ latitude, longitude });
            },
            error => {
                console.log('Error obteniendo la ubicación: ', error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const endTime = Date.now();
    const loadTime = endTime - startTime;
    console.log(`Tiempo de carga de la API de Google Maps: ${loadTime} milisegundos`);
    useEffect(() => {
        loadGoogleMapsApi();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                {/* Marcador para la ubicación */}
                <Marker coordinate={origin} title="Mi Ubicación" />
            </MapView>
            <TouchableOpacity onPress={handleBackButton} style={styles.arrowButton}>
                <Icon name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleOptions} style={styles.optionsButton}>
                <Icon name="my-location" size={24} color="black" />
            </TouchableOpacity>
            {showOptions && (
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={getMyLocation} style={styles.option}>
                        <Text>Activar Ubicación</Text>
                    </TouchableOpacity>
                    {/* Otras opciones */}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    arrowButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    optionsButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    optionsContainer: {
        position: 'absolute',
        top: 70,
        right: 20,
        backgroundColor: 'white',
        elevation: 3,
        zIndex: 2,
        padding: 10,
        borderRadius: 5,
    },
    option: {
        paddingVertical: 5,
    },
});

export default G_Maps;
