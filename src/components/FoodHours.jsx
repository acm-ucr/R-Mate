import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FoodHours = ({ hours }) => {
  const [activeTab, setActiveTab] = useState("1");

  const renderHours = () => {
    if (activeTab === "1") {
      return (
        <View className="w-full bg-rmate-blue">
          {hours.map((hour, index) => (
            <View key={index}>
              <Text>{hour.title}</Text>
              {hour.hours.map((operationalHours, index) => (
                <Text key={index}>{operationalHours}</Text>
              ))}
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View>
      <View className="flex flex-row">
        <TouchableOpacity onPress={() => setActiveTab("1")}>
          <Text>Breakfast/Brunch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("2")}>
          <Text>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("3")}>
          <Text>Dinner</Text>
        </TouchableOpacity>
      </View>
      {renderHours()}
    </View>
  );
};

export default FoodHours;

// <View className="bg-rmate-blue w-full rounded-xl mt-2 p-3">
//           <View className="flex flex-row justify-between py-1">
//             <Text className="text-rmate-white font-poppins-700 text-xl">
//               Daily Hours
//             </Text>
//             <View className="flex flex-row bg-rmate-yellow rounded-full items-center justify-between px-2">
//               <Text className="text-rmate-white font-poppins-500 text-xs my-0.5 pr-2">
//                 All SRC Hours
//               </Text>
//               <AntDesign name="clockcircle" size={12} color="white" />
//             </View>
//           </View>
//           <View className="flex flex-row justify-between py-1">
//             <Text className="text-rmate-white font-poppins-600">Monday</Text>
//             <Text className="text-rmate-white font-poppins-600">
//               6:30am - 11pm
//             </Text>
//           </View>
