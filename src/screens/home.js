import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import ResourcesCard from '../components/ResourcesCard';
import HealthSVG from '../../assets/Health.svg';

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-row">
      <Welcome name="Hailey" />
      <Text>home</Text>
      <ResourcesCard text="Health" icon={HealthSVG} />
      <ResourcesCard text="Stuff" icon={require('../../assets/SRC.svg')} />
    </View>
  );
};

export default HomeScreen;

