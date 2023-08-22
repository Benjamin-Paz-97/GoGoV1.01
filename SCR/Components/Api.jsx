import React, { useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const G_Maps = ({ navigation }) => {
    const [origin, setOrigin] = React.useState({
        latitud: -9.298135,
        longitud: - 76.000287,
    });
    const [destination, setDestination] = React.useState({
        latitud: -9.301730,
        longitud: - 76.001047,
    });
    const handleBackButton = () => {
        navigation.goBack(); // Regresar a la pantalla anterior
    };
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={handleBackButton} style={styles.arrowButton}>
                <Icon name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitud,
                    longitude: origin.longitud,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
            </MapView>
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
        width: '100%',
        height: '85%'
    }
})

export default G_Maps;