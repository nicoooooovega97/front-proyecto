import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../components/styles/GlobalStyles';
import { ProfileScreenNavigationProp } from '../navigation/navigationTypes';

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setUserToken(token);
        try {
          const response = await fetch('http://192.168.0.7:3000/users/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setName(userData.name);
            setEmail(userData.email);
          } else {
            throw new Error('Error al obtener los datos del usuario.');
          }
        } catch (error) {
        if (error instanceof Error) {
          Alert.alert('Error', error.message);
        } else {
          Alert.alert('Error', 'Error al hacer loguin');
        }
      }
      } else {
        Alert.alert('Error', 'No se pudo encontrar el token de usuario.');
        navigation.navigate('Login');
      }
    };
    loadData();
  }, [navigation]);

  const goToEditProfile = () => {
    navigation.navigate('ProfileEdit');
  };

  // const goToWeeklySummary = () => {
  //   navigation.navigate('WeeklySummary');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        editable={false}
      />
      <Text style={styles.label}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        value={email}
        editable={false}
      />
      <TouchableOpacity style={styles.button} onPress={goToEditProfile}>
        <Text style={styles.buttonText}>Editar Datos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;