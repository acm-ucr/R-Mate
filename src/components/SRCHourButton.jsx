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

  const currentDay = currentTime.getDay();
  const openMT = new Date();
  openMT.setHours(6);
  openMT.setMinutes(30);
  // const closeMT = new Date();
  // openMT.setHours(5);
  // openMT.setMinutes(0);
  let text = '';
  let buttonStyle = '';
  let textStyle = '';
  let arrowColor = '';
  if (currentDay > 0 && currentDay < 5) {
    if (currentTime.getHours() > 23 || currentTime.getTime() < openMT.getTime()) {
      text = 'Closed';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-close rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-close font-poppins-500 my-1';
      arrowColor = '#df7740';
    }
    if (currentTime.getTime() >= openMT.getTime()) {
      text = 'Open';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-open rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-open font-poppins-500 my-1';
      arrowColor = '#43b300';
    }
  }

  if (currentDay === 5) {
    if (currentTime.getHours() > 19 || currentTime.getTime() < openMT.getTime()) {
      text = 'Closed';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-close rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-close font-poppins-500 my-1';
      arrowColor = '#df7740';
    }
    if (currentTime.getTime() >= openMT.getTime()) {
      text = 'Open';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-open rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-open font-poppins-500 my-1';
      arrowColor = '#43b300';
    }
  }

  if (currentDay === 6) {
    if (currentTime.getHours() > 19 || currentTime.getHours() < 15) {
      text = 'Closed';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-close rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-close font-poppins-500 my-1';
      arrowColor = '#df7740';
    }
    if (19 - currentTime.getHours() === 1) {
      text = 'Closing Soon';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-soon rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-soon font-poppins-500 my-1';
      arrowColor = '#feb81d';
    }
    if (currentTime.getHours() >= 15) {
      text = 'Open';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-open rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-open font-poppins-500 my-1';
      arrowColor = '#43b300';
    }
  }

  if (currentDay === 0) {
    if (currentTime.getHours() > 23 || currentTime.getHours() < 15) {
      text = 'Closed';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-close rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-close font-poppins-500 my-1';
      arrowColor = '#df7740';
    }
    if (23 - currentTime.getHours() === 1) {
      text = 'Closing Soon';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-soon rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-soon font-poppins-500 my-1';
      arrowColor = '#feb81d';
    }
    if (currentTime.getHours() >= 15) {
      text = 'Open';
      buttonStyle =
        'flex flex-row items-center bg-rmate-white border-2 border-rmate-open rounded-full px-2 justify-between w-1/3';
      textStyle = 'text-rmate-open font-poppins-500 my-1';
      arrowColor = '#43b300';
    }
  }

  return (
    <View className="rounded-lg">
      <TouchableOpacity
        onPress={() => {
          setShowHours(!showHours);
        }}
      >
        <View className={buttonStyle}>
          <Text className={textStyle}>{text}</Text>
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
