import { View, Text } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import ResourcesCard from '../components/ResourcesCard';
import HealthSVG from '../../assets/Health.svg';
import srcSVG from '../../assets/SRC.svg';
import LibrarySVG from '../../assets/Library.svg';
import DirectorySVG from '../../assets/phone.svg';


const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-col bg-rmate-lightblue h-full">
      <Welcome name="Hailey" />
      <View className="max-w-screen-lg w-full p-4">
      <ResourcesCard text="Health" icon={HealthSVG} />
      <ResourcesCard text="SRC" icon={srcSVG} />
      <ResourcesCard text="Library" icon={LibrarySVG} />
      <ResourcesCard text="Directory" icon={DirectorySVG} />
      <ResourcesCard text="<fillin 1>" icon={DirectorySVG} />
      <ResourcesCard text="<fillin 2>" icon={DirectorySVG} />
      <ResourcesCard text="<fillin 3>" icon={DirectorySVG} />
      <ResourcesCard text="<fillin 4>" icon={DirectorySVG} />
      </View>
    </View>
  );
};

export default HomeScreen;
