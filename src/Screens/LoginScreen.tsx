import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { styles } from '../components/styles/GlobalStyles';
import { LoginScreenNavigationProp } from '../navigation/navigationTypes';

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso de ubicación', 'Se requiere permiso para acceder a la ubicación');
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
  
    try {
      const response = await fetch(`http://192.168.0.7:3000/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          latitude,
          longitude
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const { email, token, role } = data;
  
        if (email && token && role) {  // Verifica que ninguno de los valores sea undefined
          await AsyncStorage.setItem('userEmail', email);
          await AsyncStorage.setItem('userToken', token);
          await AsyncStorage.setItem('userRole', role);  // Guarda el rol en AsyncStorage
  
          // Redirecciona en función del rol
          if (role === 'admin') {
            navigation.navigate('ProfileAdmin');
          } else {
            navigation.navigate('Attendance');
          }
        } else {
          throw new Error('Datos incompletos de la respuesta del servidor');
        }
      } else {
        const errorData = await response.text();
        throw new Error(errorData || 'Ocurrió un error en la operación');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      Alert.alert('Operación Fallida', errorMessage);
    }
  };
  

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToPasswordRecovery = () => {
    navigation.navigate('PasswordRecovery');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bienvenidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToRegister}>
        <Text style={styles.buttonText}>Crear nueva cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToPasswordRecovery}>
        <Text style={styles.buttonText}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
