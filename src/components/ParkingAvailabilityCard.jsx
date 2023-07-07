import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MapSVG from "../../assets/map-filled.svg";

const ParkingAvailabilityCard = ({ name, address, ticket }) => {
  return (
    <View className="w-full flex-row justify-center my-2 rounded-lg bg-rmate-white">
      <View className="flex flex-row">
        <View className="w-2/3 justify-center px-3">
          <Text className="text-rmate-blue text-lg font-poppins-500 ">
            {name}{" "}
            <Text className="text-red-500 text-lg font-poppins-500 ">
              ({ticket})
            </Text>
          </Text>
        </View>
        <View className="w-1/6 flex justify-evenly p-1 py-3">
          <Text className="text-small text-rmate-blue">{address} </Text>
        </View>
        <View className="w-1/6 flex justify-evenly p-1 py-3">
          <TouchableOpacity className=" w-5/6 flex flex-row items-center aspect-square justify-center bg-rmate-offwhite rounded-full">
            <MapSVG />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ParkingAvailabilityCard;
