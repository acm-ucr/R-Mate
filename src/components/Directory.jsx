import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import DirectoryData from "./data/DirectoryData";
import BackButton from "./BackButton";
import DirectoryCard from "./DirectoryCard";
import { ScrollView } from "react-native";

const Directory = () => {
  const navigator = useNavigation();
  return (
    <View className="flex flex-col items-center justify-center">
      <BackButton navigator={navigator} text="back Directory" />
      <ScrollView className="w-11/12">
        {DirectoryData.map((directory, index) => (
          <DirectoryCard
            key={index}
            name={directory.name}
            phone={directory.phone}
          ></DirectoryCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default Directory;
