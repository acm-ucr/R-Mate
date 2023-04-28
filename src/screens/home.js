import { View, Text } from 'react-native';
import React from 'react';
import ResourcesCard from '../components/ResourcesCard';

const HomeScreen = () => {
  return (
    <View>
      <Text>home</Text>
      <ResourcesCard text = "Health" icon = {require('../../assets/Health.svg')}/>
      <ResourcesCard text = "SRC" icon = {require('../../assets/SRC.svg')}/>
    </View>
  );
};

export default HomeScreen;
