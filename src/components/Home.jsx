import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Welcome from "../components/Welcome";
import ResourcesCard from "../components/ResourcesCard";
import srcSVG from "../../assets/SRC.svg";
import careerSVG from "../../assets/career.svg";
import librarySVG from "../../assets/library.svg";
import diningSVG from "../../assets/dining.svg";
import directorySVG from "../../assets/directory.svg";
import marketSVG from "../../assets/market.svg";
import parkingSVG from "../../assets/parking.svg";
import arcSVG from "../../assets/ARC.svg";
import Title from "./Title";

const resources = [
  {
    text: "SRC",
    icon: srcSVG,
    navigate: "src",
  },
  {
    text: "ARC",
    icon: arcSVG,
    navigate: "arc",
  },
  {
    text: "Library",
    icon: librarySVG,
    navigate: "library",
  },
  {
    text: "Directory",
    icon: directorySVG,
    navigate: "directory",
  },
  {
    text: "Parking",
    icon: parkingSVG,
    navigate: "parking",
  },
  {
    text: "Markets",
    icon: marketSVG,
    navigate: "market",
  },
  {
    text: "Dining",
    icon: diningSVG,
    navigate: "dining",
  },
  {
    text: "Career",
    icon: careerSVG,
    navigate: "career",
  },
];

const Home = () => {
  return (
    <View className="w-full flex flex-col bg-rmate-white h-full">
      <Welcome name="Hailey" />
      <Title title="Upcoming Events" />
      <Title title="On Campus Resources" />
      <SafeAreaView className="flex items-center justify-center w-screen ">
        <View className="pt-3 flex items-center row-center bg-rmate-lightblue w-11/12 rounded-xl">
          <FlatList
            className="w-fit flex"
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
