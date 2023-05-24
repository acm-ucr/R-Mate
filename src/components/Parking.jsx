import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Parking = () => {
  const navigator = useNavigation();
  return (
    <View className="flex flex-col">
      <TouchableOpacity
        className="flex flex-row"
        onPress={() => {
          navigator.goBack();
        }}
      >
        <Text className="bg-red-400 text-3xl">Back</Text>
      </TouchableOpacity>
      <Text>Parking</Text>
    </View>
  );
};

export default Parking;
