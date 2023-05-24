import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const Directory = () => {
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
      <Text>Directory</Text>
    </View>
  );
};

export default Directory;
