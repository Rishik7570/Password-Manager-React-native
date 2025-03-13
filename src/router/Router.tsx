import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PasswordList from '../screens/PasswordList';
import Starting_Screen from '../screens/Starting_Screen';

export type RootStackParamList = {
  Home:undefined,
  Starting_Screen:undefined,
  PasswordList:undefined,
}

const Router = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Starting_Screen">
      <Stack.Screen name="Starting_Screen" component={Starting_Screen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="PasswordList" component={PasswordList} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default Router;
