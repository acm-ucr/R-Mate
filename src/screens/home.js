import { View, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import DirectorySVG from '../../assets/phone.svg';
import ResourcesCard from '../components/ResourcesCard';
import HealthSVG from '../../assets/Health.svg';
import srcSVG from '../../assets/SRC.svg';
import LibrarySVG from '../../assets/Library.svg';

const resources = [
  {
    text: 'Health',
    icon: HealthSVG,
  },
  {
    text: 'SRC',
    icon: srcSVG,
  },
  {
    text: 'Library',
    icon: LibrarySVG,
  },
  {
    text: 'Directory',
    icon: DirectorySVG,
  },
  {
    text: 'Add...',
    icon: HealthSVG,
  },
  {
    text: 'Add...',
    icon: HealthSVG,
  },
  {
    text: 'Add...',
    icon: HealthSVG,
  },
  {
    text: 'Add...',
    icon: HealthSVG,
  },
  {
    text: 'Add...',
    icon: HealthSVG,
  },
];

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-col bg-rmate-lightblue h-full">
      <Welcome name="Hailey" />
      <SafeAreaView className="flex items-center justify-center">
        <View className="w-full p-2">
          <FlatList
            className="w-full flex p-2"
            data={resources}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            numColumns={4}
            key={4}
            renderItem={({ item }) => <ResourcesCard text={item.text} icon={item.icon} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
