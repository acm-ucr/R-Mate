import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import ResourcesCard from '../components/ResourcesCard';
import HealthSVG from '../../assets/Health.svg';

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-col bg-blue-500 h-full">
      <Welcome name="Hailey" />
      <ResourcesCard text="Health" icon={HealthSVG} />
    </View>
  );
};

export default HomeScreen;
