import { View, Text, TouchableOpacity } from 'react-native';
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
    default:
      style = '';
      text = '';
  }

  return (
    <View>
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
};

export default SRCHourButton;
