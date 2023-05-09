import { View, Text } from 'react-native';
import React from 'react';

const SRCHourButton = ({ status }) => {
  let style = '';
  let text = '';

  switch(status) {
    case 'open':
      style = 'bg-green-500 text-white';
      text = 'Open';
    case 'closing soon':
      style = 'bg-yellow-500 text-white';
      text = 'Closing Soon';
    case 'closed':
      style = 'bg-red-500 text-white';
      text = 'Closed';
  }

  return (
    <View>
      <Text>SRCHourButton</Text>
    </View>
  );
};

export default SRCHourButton;
