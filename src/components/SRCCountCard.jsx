import { View, Text } from 'react-native';
import React from 'react';
import { CircularProgress } from 'react-native-circular-progress';
import { useState } from 'react';

const SRCCountCard = () => {
  const [fill, setFill] = useState(40);
  return (
    <View className="bg-rmate-white m-2 p-3 rounded-xl">
      <View className="flex justify-between flex-row">
        <View className="flex justify-between">
          <View className="flex">
            <Text className="text-rmate-blue font-poppins-600">Basketball (Lower Court)</Text>
            <Text className="text-[#44B300] font-poppins-400">(Open)</Text>
          </View>
          <Text className="text-rmate-blue font-poppins-400">Last Count: 42</Text>
        </View>

        <View>
          <CircularProgress
            size={100}
            width={9}
            fill={fill}
            tintColor="#44B300"
            backgroundColor="#DEE7F5"
            rotation={0}
          >
            {(fill) => <Text className="font-poppins-500 text-md text-rmate-blue">{fill}%</Text>}
          </CircularProgress>
        </View>
      </View>
    </View>
  );
};

export default SRCCountCard;
