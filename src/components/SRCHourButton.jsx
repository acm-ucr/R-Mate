import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// import { AntDesign } from '@expo/vector-icons';

const SRCHourButton = ({ status }) => {
  const [showHours, setShowHours] = useState(false);

  // let style = '';
  // let text = '';

  // switch (status) {
  //   case 'open':
  //     style = 'bg-green-500 text-white';
  //     text = 'Open';
  //   case 'closing soon':
  //     style = 'bg-yellow-500 text-white';
  //     text = 'Closing Soon';
  //   case 'closed':
  //     style = 'bg-red-500 text-white';
  //     text = 'Closed';
  //   default:
  //     style = '';
  //     text = '';
  // }

  return (
    <View className="rounded-lg">
      <TouchableOpacity
        onPress={() => {
          setShowHours(!showHours);
        }}
      ></TouchableOpacity>

      {showHours && (
        <View>
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default SRCHourButton;
