// ComponentB.js

import React from 'react';
import { View, Text } from 'react-native';
import Singleton from './Singleton';

const ComponentB = () => {
  const singletonInstance = Singleton;
  const data = singletonInstance.getData();
  const handleBackButton = () => {
        navigation.goBack(); // Regresar a la pantalla anterior
    };
  return (
    <View>
      
      <Text>Component B</Text>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default ComponentB;
