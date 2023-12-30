import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row p-3 items-center space-x-3 bg-white shadow-lg">
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/96/78/4c/96784c9eccfd1b02096c01d89a3fd792.jpg',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-sm">Good Morning!</Text>
          <Text className="font-bold text-black text-2xl">Archisman Midya</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icons.Bars3BottomRightIcon size={35} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
