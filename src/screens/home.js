import { View, Text } from 'react-native';
import React from 'react';
import ResourcesCard from '../components/ResourcesCard';
import Title from '../components/Title';

const HomeScreen = () => {
  return (
    <View>
      <Text>home</Text>
      <Title title="On Campus Resources"></Title>
      <ResourcesCard text="Health" icon={require('../../assets/Health.svg')} />
      <ResourcesCard text="SRC" icon={require('../../assets/SRC.svg')} />
      <Title title="Upcoming Events"></Title>
    </View>
  );
};

export default HomeScreen;
