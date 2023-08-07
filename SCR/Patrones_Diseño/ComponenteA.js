// ComponentA.js

import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import Singleton from './Singleton';

const ComponentA = () => {
  const singletonInstance = Singleton;

  const handleAddData = () => {
    singletonInstance.addData('New Data');
  };

  return (
    <View style={styles.container} >
      <Text>Component A</Text>
      <Button title="Add Data" onPress={handleAddData} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingBottom: 190,
    }
});
export default ComponentA;
