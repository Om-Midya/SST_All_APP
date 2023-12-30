/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator,} from '@react-navigation/drawer';
import DashBoard from './screens/DashBoard';
import Bus from './screens/Bus';
import Header from './components/Header';
import Food from './screens/Food';
import Attendance from './screens/Attendance';
import DrawerContent from './components/DrawerContent';
import { Image } from 'react-native';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
        // eslint-disable-next-line react/no-unstable-nested-components
        screenOptions={{
            header: () => <Header />,
            drawerLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
            },
        }}
        drawerContent={(props)=> <DrawerContent {...props}/>}
    >
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
            drawerIcon: ()=> <Image
                source={require('./images/dashboard.png')}
            />,
        }}
      />
      <Drawer.Screen
        name="Bus"
        component={Bus}
        options={{
            drawerIcon: ()=> <Image
                source={require('./images/bus-school.png')}
            />,
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{
            drawerIcon: ()=> <Image
                source={require('./images/calendar.png')}
            />,
        }}
      />
      <Drawer.Screen
        name="Food"
        component={Food}
        options={{
            drawerIcon: ()=> <Image
                source={require('./images/diet.png')}
            />,
        }}
      />
    </Drawer.Navigator>
  );
}

function Naviagtor() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Naviagtor;
