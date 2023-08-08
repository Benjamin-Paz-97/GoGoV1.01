import React from "react";
import MapView from 'react-native-maps'
import { View, StyleSheet } from 'react-native';

const G_Maps = () => {
    return (
        <View style={styles.container} >
            <MapView style={styles.map} />
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