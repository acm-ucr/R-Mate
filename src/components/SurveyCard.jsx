import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import React from "react";

const SurveyCard = ({ title, onPress, due }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-[11px] my-2"
    >
      <View className="rounded-[11px] bg-rmate-white p-4">
        <View style={{ flexDirection: "row", alignItems: "left" }}>
          <Text className="text-rmate-black text-[19px] font-poppins-600 font-bold">
            {title}
          </Text>

          <View
            style={{
              width: 50,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "green",
              marginLeft: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "green", fontSize: 12 }}>{"Open"}</Text>
          </View>
        </View>

        <Text>{"\n"}</Text>

        <Text className="py text-rmate-black font-poppins-600 font-bold">
          {"due: " + due}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SurveyCard;
