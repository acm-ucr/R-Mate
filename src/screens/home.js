import { View } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import ResourcesCard from '../components/ResourcesCard';

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-row">
      <Welcome name="Ashley" />
      <Text>home</Text>
      <ResourcesCard text="Health" icon={require('../../assets/Health.svg')} />
      <ResourcesCard text="SRC" icon={require('../../assets/SRC.svg')} />
    </View>
  );
};

export default HomeScreen;
