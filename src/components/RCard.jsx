import { View, Text } from 'react-native';
import React from 'react';

const RCard = () => {
  return (
    <View className="w-full p-4 bg-[#DEE7F5]">
      <Text
        className="text-black text-[24px] font-normal pb-4"
        style={{ fontFamily: 'Poppins_700Bold' }}
      >
        Digital R&apos;Card
      </Text>

      <div className="rounded-[20px] h-229px w-382px p-24 relative bg-[#F5F5F5] bg-opacity-50">
        <div className="absolute -top-1 -right-1 w-16 h-16 border-t-8 border-r-8 border-[#5A8BDF] rounded-tr-[20px]"></div>
        <div className="absolute -top-1 -left-1 w-16 h-16 border-t-8 border-l-8 border-[#5A8BDF] rounded-tl-[20px]"></div>
        <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-8 border-l-8 border-[#5A8BDF] rounded-bl-[20px]"></div>
        <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-8 border-r-8 border-[#5A8BDF] rounded-br-[20px]"></div>

        <Text
          className="text-black text-[16px] font-normal bg-[#F5F5F5] bg-transparent"
          style={{ fontFamily: 'Poppins_600SemiBold' }}
        >
          Start by scanning your R&apos;Card
        </Text>
      </div>
    </View>
  );
};

export default RCard;
