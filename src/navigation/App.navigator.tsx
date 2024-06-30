// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RootTabParamList} from './navigationTypes';
import {RootStackParamList} from './navigationTypes';
import WelcomeScreen from 'src/Screens/WelcomeScreen';
import RegisterScreen from 'src/Screens/RegisterScreen';
import LoginScreen from 'src/Screens/LoginScreen';
import PasswordRecoveryScreen from 'src/Screens/PasswordRecoveryScreen';
import  CategoriesScreen from 'src/Screens/CategoriesScreen';
import  ProfileScreen from 'src/Screens/ProfileScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'iniciar sesion'}} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} options={{ title: 'Recuperar Contraseña' }} />
  </Stack.Navigator>
);



function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'inicio',tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="home-variant" size={24} color="black" /> ),headerShown: false}} />
      <Tab.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Servicios',tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="format-list-bulleted-square" size={24} color="black" />),headerShown: false }} />
      <Tab.Screen name="Profile" component={LoginStack} options={{ title: 'Perfil',tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="account" size={24} color="black" />),headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default AppNavigator;
