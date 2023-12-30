import { SafeAreaView, Image, Text, View } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <SafeAreaView className="flex-1">
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/96/78/4c/96784c9eccfd1b02096c01d89a3fd792.jpg',
        }}
        className="h-60 w-full bg-gray-300 p-4 "
      />
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
