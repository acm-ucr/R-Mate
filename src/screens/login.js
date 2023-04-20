import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, borderColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 20, borderRadius: 5 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00274C' }}>
        <Text style={{ position: 'absolute', top: -17, left: 0 }}>Login</Text>
        <TouchableOpacity
          style={{position: 'absolute', top: 850, backgroundColor: '#D3D3D3', padding: 20, borderRadius: 10, shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
          shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}
          onPress={() => navigation.navigate('BottomNavigator')}
        >
          <View>
            <Text style={{ color: '#00274C', fontWeight: 'bold', fontSize: 18 }}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;