// src/navigation/navigationTypes.ts

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type RootTabParamList = {
  Welcome: undefined;
  Categories : undefined;
  Login: undefined;
  Register: undefined;
  PasswordRecovery: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Register: undefined;
  PasswordRecovery: undefined;
  Profile: undefined;
  Chat: undefined;
  Map: undefined;
};


export type WelcomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Welcome'>;
export type CategoriesScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Categories'>;
export type LoginScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Login'>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList , 'Register'>;
export type PasswordRecoveryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList , 'PasswordRecovery'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList , 'Profile'>;
export type ChatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList , 'Chat'>;
export type MapScreenNavigationProp = NativeStackNavigationProp<RootStackParamList , 'Map'>;