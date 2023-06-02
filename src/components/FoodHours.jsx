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
      <View
        className={`w-fit rounded-xl mx-2 px-3 py-2 justify-center bottom-3 ${bgColor}`}
      >
        {hours.map((timeSlot) =>
          timeSlot.title === activeTab ? (
            <View key={timeSlot}>
              {timeSlot.days.map((day, index) => (
                <View
                  className="flex flex-row justify-between py-[0.85]"
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
    <View className="w-fit">
      {hours[0].title === "none" && (
        <View className="bg-rmate-lightblue rounded-xl mx-2 px-3 py-2">
          {hours.map((timeSlot) => (
            <View key={timeSlot}>
              {timeSlot.days.map((day, index) => (
                <View
                  className="flex flex-row justify-between py-[0.85]"
                  key={index}
                >
                  <Text className={`${textColor} font-poppins-600`}>{day}</Text>
                  <Text className={`${textColor} font-poppins-600`}>
                    {timeSlot.time[index]}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
      {hours[0].title === "Breakfast/Brunch" && (
        <View>
          <View className="flex flex-row ml-2">
            <TouchableOpacity onPress={() => setActiveTab("Breakfast/Brunch")}>
              <View className="bg-rmate-lightblue border-rmate-lightblue h-10 rounded-md px-2 pt-1">
                <Text className="font-poppins-600 text-md mx-2">
                  Breakfast/Brunch
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Lunch")}>
              <View className="bg-rmate-blue border-rmate-blue h-10 rounded-md px-6 pt-1">
                <Text className="text-rmate-white font-poppins-600 text-md mx-2">
                  Lunch
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Dinner")}>
              <View className="bg-rmate-midblue border-rmate-midblue h-10 px-6 rounded-md pt-1">
                <Text className="text-rmate-white font-poppins-600 text-md mx-2">
                  Dinner
                </Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
          </View>
          {renderTime(activeTab)}
        </View>
      )}
      {hours[0].title === "Patio Bar" && (
        <View>
          <View className="flex flex-row">
            <TouchableOpacity onPress={() => setActiveTab("Patio Bar")}>
              <View className="bg-rmate-lightblue border-rmate-lightblue h-10 rounded-md px-2 pt-1">
                <Text className="font-poppins-600 text-md mx-2">Patio Bar</Text>
                {colorStyle()}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Patio Bar")}>
              <View className="bg-rmate-lightblue border-rmate-lightblue h-10 rounded-md px-2 pt-1">
                <Text className="font-poppins-600 text-md mx-2">Patio Bar</Text>
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
