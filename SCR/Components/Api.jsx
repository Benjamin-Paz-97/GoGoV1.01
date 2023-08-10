import React, { useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps'
import { View, StyleSheet } from 'react-native';


const G_Maps = () => {
    const [origin, setOrigin] = React.useState({
        latitud: -9.298135,
        longitud: - 76.000287,
    });
    const [destination, setDestination] = React.useState({
        latitud: -9.301730,
        longitud: - 76.001047,
    });
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitud,
                    longitude: origin.longitud,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                <Marker
                    ///  draggable
                    ///   coordinate={origin}
                    ///    onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
                    /// image={require('../assets/position.png')}
                    draggable
                    coordinate={{
                        latitude: origin.latitud, // Ajusta las coordenadas en una pequeña cantidad
                        longitude: origin.longitud,
                    }}
                    image={require('../assets/position.png')}
                    onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}

                />
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
                />
                <Polyline
                    coordinates={[origin, destination]}
                    strokeWidth={8}
                />
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
        height: '100%'
    }
})

export default G_Maps;