import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function ParkingLotFilter() {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState("All");
  const data = [
    "All Parking Zones",
    "RED Parking",
    "BLUE Parking",
    "GOLD Parking",
    "GOLD PLUS Parking",
    "RESIDENCE HALLS PARKING",
    "CAMPUS APARTMENT Parking",
    "VISITOR Parking",
  ];
  return (
    <View className="items-center w-screen z-50 flex">
      <TouchableOpacity
        activeOpacity={1}
        className="w-11/12 p-3 flex flex-row z-50 bg-rmate-blue rounded-lg"
        onPress={() => {
          setExpand(!expand);
        }}
      >
        <Text className="flex-1 text-white text-xl font-poppins-400">
          {selected}
        </Text>
        {expand ? (
          <Icon name="md-caret-down" size={25} color={"white"} />
        ) : (
          <Icon name="md-caret-up" size={25} color={"white"} />
        )}
      </TouchableOpacity>
      {expand && (
        <View className="absolute z-40 bg-rmate-midblue w-11/12 justify-between p-3 rounded-lg pt-16">
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelected(item);
                setExpand(false);
              }}
            >
              <Text className="py-1 text-white text-xl font-poppins-400">
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
