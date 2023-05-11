import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

const SRCHourButton = () => {
  const [showHours, setShowHours] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function schedule() {
    const currentDay = currentTime.getDay();
    const openMF = new Date();
    openMF.setHours(6, 30, 0);

    if (currentDay > 0 && currentDay < 5) {
      if (currentTime.getHours() >= 23 || currentTime.getTime() < openMF.getTime()) {
        return 'close';
      }
      if (23 - currentTime.getHours() === 1) {
        return 'soon';
      }
      if (currentTime.getTime() >= openMF.getTime()) {
        return 'open';
      }
    }

    if (currentDay === 5) {
      if (currentTime.getHours() >= 19 || currentTime.getTime() < openMF.getTime()) {
        return 'close';
      }
      if (19 - currentTime.getHours() === 1) {
        return 'soon';
      }
      if (currentTime.getTime() >= openMF.getTime()) {
        return 'open';
      }
    }

    if (currentDay === 6) {
      if (currentTime.getHours() >= 19 || currentTime.getTime() < openMF.getTime()) {
        return 'close';
      }
      if (19 - currentTime.getHours() === 1) {
        return 'soon';
      }
      if (currentTime.getHours() >= 15) {
        return 'open';
      }
    }

    if (currentDay === 0) {
      if (currentTime.getHours() >= 23 || currentTime.getTime() < openMF.getTime()) {
        return 'close';
      }
      if (23 - currentTime.getHours() === 1) {
        return 'soon';
      }
      if (currentTime.getHours() >= 15) {
        return 'open';
      }
    }
  }

  function timeStyle(status) {
    if (status === 'open') {
      text = 'Open';
      buttonColor = 'border-rmate-open';
      textColor = 'text-rmate-open';
      arrowColor = '#43b300';
    }
    if (status === 'soon') {
      text = 'Closing Soon';
      buttonColor = 'border-rmate-soon';
      textColor = 'text-rmate-soon';
      arrowColor = '#feb81d';
    }
    if (status === 'close') {
      text = 'Close';
      buttonColor = 'border-rmate-close';
      textColor = 'text-rmate-close';
      arrowColor = '#df7740';
    }
  }

  let text = '';
  let buttonColor = '';
  let textColor = '';
  let arrowColor = '';

  timeStyle(schedule());

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShowHours(!showHours);
        }}
      >
        <View
          className={`flex flex-row items-center bg-rmate-white border-2 ${buttonColor} rounded-full px-2 justify-between w-1/3`}
        >
          <Text className={`font-poppins-500 my-1 ${textColor}`}>{text}</Text>
          <View>
            {showHours ? (
              <AntDesign name="caretdown" size={10} color={arrowColor} />
            ) : (
              <AntDesign name="caretup" size={10} color={arrowColor} />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {showHours && (
        <View className="bg-rmate-blue w-11/12 rounded-md p-3">
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-700 text-xl">Daily Hours</Text>
            <View className="flex flex-row bg-rmate-yellow rounded-full items-center justify-between px-2">
              <Text className="text-rmate-white font-poppins-500 text-xs my-0.5 pr-2">
                All SRC Hours
              </Text>
              <AntDesign name="clockcircle" size={12} color="white" />
            </View>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Monday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Tuesday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Wednesday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Thursday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Friday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 7pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Saturday</Text>
            <Text className="text-rmate-white font-poppins-600">3pm - 7pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Sunday</Text>
            <Text className="text-rmate-white font-poppins-600">3pm - 11pm</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SRCHourButton;
