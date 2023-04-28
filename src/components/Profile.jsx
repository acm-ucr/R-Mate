import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import React, { /* useState, */ useContext } from 'react';
import RMateContext from './RMateContext';
// import { db } from '../../firebase';
// import { doc, getDoc } from 'firebase/firestore';
import ProfileSVG from '../../assets/profilePIC.svg';

const general = [
  {
    navigation: 'Account',
    text: 'Account',
    icon: <MaterialIcons name="person-outline" size={24} color="black" />,
  },
  {
    navigation: 'Notification',
    text: 'Notification',
    icon: <MaterialCommunityIcons name="bell-outline" size={24} color="black" />,
  },
  {
    navigation: 'LoginScreen',
    text: 'Click to Logout',
    icon: <MaterialIcons name="logout" size={24} color="black" />,
  },
];

const feedback = [
  {
    navigation: 'Bug',
    text: 'Bug',
    icon: <Entypo name="bug" size={24} color="black" />,
  },
  {
    navigation: 'Feedback',
    text: 'Feedback',
    icon: <Entypo name="paper-plane" size={24} color="black" />,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useContext(RMateContext);

  if (!user) {
    console.log('oops');
  }

  // const [name] = useState('Name from useState');

  // useEffect(() => {
  //   const getData = async () => {
  //     const docSnap = await getDoc(doc(db, 'test', 'test_id'));
  //     console.log(docSnap.data());
  //     setName(docSnap.data().name);
  //   };
  //   getData();
  // }, []);

  return (
    <SafeAreaView className="w-full flex justify-center items-center bg-rmate-blue">
      <View className="w-full h-[35vh] p-3">
        <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex items-center justify-center h-5/6">
          <ProfileSVG width={100} height={100} />
          <Text
            className="text-rmate-white text-3xl font-semibold my-4"
            style={{ fontFamily: 'Poppins_400Regular' }}
          >
            {user.name}
          </Text>
        </View>
      </View>
      <View className="bg-rmate-offwhite w-full flex flex-row justify-center">
        <View className="w-11/12 mt-4">
          <View className="flex flex-row">
            <View className="bg-rmate-yellow rounded-full px-4 py-2 mt-4">
              <Text className=" text-black font-poppins-600">General</Text>
            </View>
          </View>
          {general.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.navigation)}
              className="my-3"
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  {item.icon}
                  <Text className="mx-2" style={{ fontFamily: 'Poppins_400Regular' }}>
                    {item.text}
                  </Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ))}
          <View className="flex flex-row">
            <View className="bg-rmate-yellow rounded-full px-4 py-2 mt-4">
              <Text className=" text-black font-poppins-600">Feedback</Text>
            </View>
          </View>

          {feedback.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.navigation)}
              className="my-3"
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  {item.icon}
                  <Text className="mx-2" style={{ fontFamily: 'Poppins_400Regular' }}>
                    {item.text}
                  </Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
