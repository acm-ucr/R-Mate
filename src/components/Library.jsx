import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Library = () => {
  const navigator = useNavigation();
  return (
    <View>
      <TouchableOpacity
        className="flex flex-row"
        onPress={() => {
          navigator.goBack();
        }}
      >
        <Text className="bg-red-400 text-3xl">Back</Text>
      </TouchableOpacity>
      <Text>Library</Text>
    </View>
  );
};

export default Library;
