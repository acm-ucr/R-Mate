import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FoodHours = ({ hours }) => {
  const [activeTab, setActiveTab] = useState("");

  const renderTime = (activeTab) => {
    return (
      <View className="w-full bg-rmate-blue">
        {hours.map((timeSlot) =>
          timeSlot.title === activeTab ? (
            <View key={timeSlot}>
              {timeSlot.days.map((day, index) => (
                <View
                  className="flex flex-row justify-between py-1"
                  key={index}
                >
                  <Text className="text-rmate-white font-poppins-600">
                    {day}
                  </Text>
                  <Text className="text-rmate-white font-poppins-600">
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
      )}
      {hours[0].title === "Breakfast/Brunch" && (
        <View>
          <View className="flex flex-row">
            <TouchableOpacity onPress={() => setActiveTab("Breakfast/Brunch")}>
              <Text>Breakfast/Brunch</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Lunch")}>
              <Text>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Dinner")}>
              <Text>Dinner</Text>
            </TouchableOpacity>
          </View>
          {renderTime(activeTab)}
        </View>
      )}
    </View>
  );
};

export default FoodHours;
