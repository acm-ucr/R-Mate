import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const FoodCard = ({ place, navigator, foodType }) => {
  return (
    <TouchableOpacity
      className="bg-white my-2"
      onPress={() => {
        navigator.navigate("foodDetailPage", {
          navigator: navigator,
          place: place,
          foodType: foodType,
        });
      }}
    >
      <Text>{place.name}</Text>
      {place.category && <Text>{place.category}</Text>}
      <Text>{place.address}</Text>
      {place.paying.map((pay, index) => (
        <Text key={index}>{pay}</Text>
      ))}
    </TouchableOpacity>
  );
};

export default FoodCard;
