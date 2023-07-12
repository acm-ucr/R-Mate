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
        <View className="flex flex-row">
          <Text className="text-rmate-blue text-[19px] font-poppins-600 font-bold flex-1">
            {place.location_name}
          </Text>
          {place.category && <Text>{place.category}</Text>}

          <TouchableOpacity className="border border-[#44B300] rounded-full px-2.5">
            <Text className="text-xs font-poppins-300 text-[#44B300] mt-1">
              Open
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="py-[8px] text-rmate-blue text-[12px] font-poppins-400 w-[138px]">
          {place.address}
        </Text>

        <View className="flex flex-row justify-start flex-wrap">
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
