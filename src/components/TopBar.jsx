import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

// eslint-disable-next-line react/prop-types
const TopBar = () => {
  return (
    <View>
      <Text className="bg-blue-500">UCR LOGO</Text>
      <TouchableOpacity accessibilityRole="button" onPress={() => {}}>
        <Text className="bg-red-500">profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
