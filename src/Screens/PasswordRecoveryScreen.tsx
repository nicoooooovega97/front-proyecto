import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '../components/styles/GlobalStyles';
import { PasswordRecoveryScreenNavigationProp, RootTabParamList } from '../navigation/navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface PasswordRecoveryScreenProps {
  navigation: PasswordRecoveryScreenNavigationProp;
}

export default function PasswordRecoveryScreen({ navigation }: PasswordRecoveryScreenProps) {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      const response = await fetch(`http://192.168.0.7:3000/api/v1/auth/request-reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert('Solicitud enviada', 'Revise su correo electrónico para restablecer su contraseña');
        navigation.navigate('Login');
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      Alert.alert('Fallo en la operación', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordRecovery}>
        <Text style={styles.buttonText}>Enviar solicitud</Text>
      </TouchableOpacity>
    </View>
  );
}
