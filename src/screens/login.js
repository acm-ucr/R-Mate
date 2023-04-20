import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, borderColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 20, borderRadius: 5 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00274C' }}>
        <Text>Login</Text>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: '#00274C' }}
          onPress={() => navigation.navigate('BottomNavigator')}
        >
          <View>
            <Text style={{ color: 'white' }}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;