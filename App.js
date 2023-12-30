import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from './screens/DashBoard';
import Bus from './screens/Bus';
import Header from './components/Header';
import Food from './screens/Food';
import Attendance from './screens/Attendance';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          header: () => null,
          title: () => null,
          drawerLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="Bus"
        component={Bus}
        options={{
          header: () => null,
          title: () => null,
          drawerLabel: 'Bus',
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{
          header: () => null,
          title: () => null,
          drawerLabel: 'Attendance',
        }}
      />
      <Drawer.Screen
        name="Food"
        component={Food}
        options={{
          header: () => null,
          title: () => null,
          drawerLabel: 'Food',
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Header />
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

export default App;
