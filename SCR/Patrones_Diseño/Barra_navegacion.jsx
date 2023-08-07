import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBarButton = ({ label, onPress, isFocused }) => {
    return (
        <TouchableOpacity
            style={[styles.tabBarButton, { backgroundColor: isFocused ? '#FFFFFF' : 'transparent' }]}
            onPress={onPress}
        >
            <Text style={{ color: isFocused ? '#000000' : '#FFFFFF' }}>{label}</Text>
            {isFocused && <View style={styles.tabBarStroke} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    tabBarStroke: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
});

export default CustomTabBarButton;