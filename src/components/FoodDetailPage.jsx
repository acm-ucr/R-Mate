import { View, Text, Linking } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { Image } from "react-native";
import FoodHours from "./FoodHours";

const FoodDetailPage = ({ route }) => {
  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  });
  return (
    <View>
      <BackButton
        navigator={route.params.navigator}
        text={`back ${route.params.foodType}`}
      />
      <Image source={route.params.place.picture} className="w-screen h-fit" />
      {route.params.place.paying.map((pay, index) => {
        return <Text key={index}>{pay}</Text>;
      })}
      <Text>{route.params.place.address}</Text>
      <FoodHours hours={route.params.place.hours} />
      <Text>{route.params.place.phoneNumber}</Text>
      {route.params.place.website && (
        <TouchableOpacity
          onPress={() => handlePress(route.params.place.website)}
        >
          <Text>View website</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FoodDetailPage;
