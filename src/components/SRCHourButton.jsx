import { View, Text } from 'react-native';
import React from 'react';

const SRCHourButton = ({ status }) => {
  let style = '';
  let text = '';

  switch(status) {
    case 'open':
      style = 'bg-green-500 text-white';
      text = 'Open';
  }

  return (
    <View>
      <Text>SRCHourButton</Text>
    </View>
  );
};

export default SRCHourButton;
