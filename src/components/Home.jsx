import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Welcome from "../components/Welcome";
import DirectorySVG from "../../assets/phone.svg";
import ResourcesCard from "../components/ResourcesCard";
import HealthSVG from "../../assets/Health.svg";
import srcSVG from "../../assets/SRC.svg";
import LibrarySVG from "../../assets/Library.svg";

const resources = [
  {
    text: "Health",
    icon: HealthSVG,
    navigate: "health",
  },
  {
    text: "SRC",
    icon: srcSVG,
    navigate: "src",
  },
  {
    text: "Library",
    icon: LibrarySVG,
    navigate: "library",
  },
  {
    text: "Directory",
    icon: DirectorySVG,
    navigate: "directory",
  },
  //   {
  //     text: 'Add...',
  //     icon: HealthSVG,
  //     navigate: '',
  //   },
  //   {
  //     text: 'Add...',
  //     icon: HealthSVG,
  //     navigate: '',
  //   },
  //   {
  //     text: 'Add...',
  //     icon: HealthSVG,
  //     navigate: '',
  //   },
  //   {
  //     text: 'Add...',
  //     icon: HealthSVG,
  //     navigate: '',
  //   },
  //   {
  //     text: 'Add...',
  //     icon: HealthSVG,
  //     navigate: '',
  //   },
];

const Home = () => {
  return (
    <View className="w-full flex flex-col bg-rmate-lightblue h-full">
      <Welcome name="Hailey" />
      <SafeAreaView className="flex items-center justify-center">
        <View className="w-screen pt-3 flex items-center row-center">
          <FlatList
            className="w-fit flex pr-4"
            data={resources}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            numColumns={4}
            key={4}
            renderItem={({ item }) => (
              <ResourcesCard
                text={item.text}
                icon={item.icon}
                navigate={item.navigate}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
