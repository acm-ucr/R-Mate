import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const SRCDropdown = () => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState("Activity Classes");
  const data = [
    "Activity Classes",
    "Aquatics",
    "Competitive Sports",
    "Cooking Well",
    "Fitwell",
    "Open Recreation",
    "Outdoor Excursions",
    "Ropes",
    "Youth Programs",
  ];
  return (
    <View className="z-50">
      <TouchableOpacity
        activeOpacity={1}
        className="justify-between items-center p-3 flex flex-row relative z-50 bg-rmate-blue rounded-lg"
        onPress={() => {
          setExpand(!expand);
        }}
      >
        <Text className=" text-white text-xl font-poppins-400">{selected}</Text>
        {expand ? (
          <Icon name="md-caret-down" size={25} color={"white"} />
        ) : (
          <Icon name="md-caret-up" size={25} color={"white"} />
        )}
      </TouchableOpacity>
      {expand && (
        <View className="absolute z-40 bg-rmate-midblue w-full justify-between p-3 rounded-lg pt-16">
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
};

export default SRCDropdown;
