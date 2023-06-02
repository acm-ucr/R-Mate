import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const FoodCard = ({ place, navigator, foodType }) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-[11px] my-2"
      onPress={() => {
        navigator.navigate("foodDetailPage", {
          navigator: navigator,
          place: place,
          foodType: foodType,
        });
      }}
    >
      <View className="rounded-[11px] bg-rmate-white p-4">
        <Text className="text-rmate-blue text-[19px] font-poppins-600 font-bold">
          {place.location_name}
        </Text>
        {place.category && <Text>{place.category}</Text>}

        <Text className="py-[8px] text-rmate-blue text-[12px] font-poppins-400 w-[138px]">
          {place.address}
        </Text>

        <View className="flex flex-row justify-start">
          {place.paying.map((pay, index) => (
            <View key={index} className="rounded-full bg-rmate-blue p-2 m-1">
              <Text className="text-center text-rmate-white">{pay}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
