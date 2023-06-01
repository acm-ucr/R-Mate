import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FoodHours = ({ hours }) => {
  const [activeTab, setActiveTab] = useState(hours[0].title);

  let bgColor = "";
  let textColor = "";

  const colorStyle = () => {
    if (
      activeTab === "Breakfast/Brunch" ||
      activeTab === "none" ||
      activeTab === "Patio Bar"
    ) {
      bgColor = "bg-rmate-lightblue";
      textColor = "text-rmate-black";
    } else if (activeTab === "Lunch" || activeTab === "Indoor Dining") {
      bgColor = "bg-rmate-blue";
      textColor = "text-rmate-white";
    } else if (activeTab === "Dinner") {
      bgColor = "bg-rmate-midblue";
      textColor = "text-rmate-white";
    }
  };

  const renderTime = (activeTab) => {
    return (
      <View className={`w-full rounded-xl p-3 ${bgColor}`}>
        {hours.map((timeSlot) =>
          timeSlot.title === activeTab ? (
            <View key={timeSlot}>
              {timeSlot.days.map((day, index) => (
                <View
                  className="flex flex-row justify-between py-1"
                  key={index}
                >
                  <Text className={`${textColor} font-poppins-600`}>{day}</Text>
                  <Text className={`${textColor} font-poppins-600`}>
                    {timeSlot.time[index]}
                  </Text>
                </View>
              ))}
            </View>
          ) : null
        )}
      </View>
    );
  };

  return (
    <View>
      {hours[0].title === "none" && (
        <View className="w-full bg-rmate-lightblue">
          {hours.map((hour, index) => (
            <View key={index}>
              {hour.hours.map((operationalHours, index) => (
                <Text key={index}>{operationalHours}</Text>
              ))}
            </View>
          ))}
        </View>
      )}
      {hours[0].title === "Breakfast/Brunch" && (
        <View>
          <View className="flex flex-row">
            <TouchableOpacity onPress={() => setActiveTab("Breakfast/Brunch")}>
              <View className="bg-rmate-lightblue border-t-2 border-x-2 rounded-md px-2 py-0">
                <Text className="font-poppins-500 text-md mx-2">
                  Breakfast/Brunch
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Lunch")}>
              <View className="bg-rmate-blue border-t-2 border-x-2 rounded-md px-2 py-0">
                <Text className="text-rmate-white font-poppins-500 text-md mx-2">
                  Lunch
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Dinner")}>
              <View className="bg-rmate-midblue border-t-2 border-x-2 rounded-md px-2 py-0">
                <Text className="text-rmate-white font-poppins-500 text-md mx-2">
                  Dinner
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
          </View>
          {renderTime(activeTab)}
        </View>
      )}
    </View>
  );
};

export default FoodHours;
