// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../components/styles/GlobalStyles';
import { ChatScreenNavigationProp } from '../navigation/navigationTypes';

interface ChatScreenProps {
  navigation: ChatScreenNavigationProp;
}

function ChatScreen({ navigation }: ChatScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigatetoChat = () => {
    navigation.navigate('Chat');
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={navigatetoChat}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChatScreen;
