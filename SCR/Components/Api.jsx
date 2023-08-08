import React from "react";
import MapView from 'react-native-maps'
import { View, StyleSheet } from 'react-native';


const G_Maps = () => {
    const [origin, setOrigin] = React.useState({
        latitud: -9.298440,
        longitud: - 76.000381,
    })
    return (
        <View style={styles.container} >
            <MapView style={styles.map}
                initialRegion={{
                    latitude: origin.latitud,
                    longitude: origin.longitud,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            />
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

export default G_Maps