import { View, Text, FlatList, Image, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import ResourcesCard from '../components/ResourcesCard';
import HealthSVG from '../../assets/Health.svg';
import srcSVG from '../../assets/SRC.svg';
import LibrarySVG from '../../assets/Library.svg';
import DirectorySVG from '../../assets/phone.svg';

const screenWidth = Dimensions.get("window").width;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: screenWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12
  }
})

const HomeScreen = ({ name }) => {
  return (
    <View className="w-full flex flex-col bg-rmate-lightblue h-full">
      <Welcome name="Hailey" />
        <SafeAreaView style={styles.container}>
          <View style={styles.inputContainer}>
            <FlatList
              className="w-full flex p-2 bg-rmate-blue"
              data={resources}
              ItemSeparatorComponent={() => <View style={{ height: 5}}/>}
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
