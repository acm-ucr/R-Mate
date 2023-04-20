import { View, Text } from 'react-native';
import React from 'react';

const Title = ({ title }) => {
  return (
    <View className="w-full flex flex-row">
      <Text
        className="bg-rmate-blue text-white rounded-xl text-base py-1.5 px-4 my-2 mx-4"
        style={{ fontFamily: 'Poppins_500Medium' }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Title;
