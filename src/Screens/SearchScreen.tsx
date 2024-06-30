// Importa los módulos necesarios de React Native y React Navigation
import ProductList from '@components/ProductList';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

// Define los tipos de propiedades (si las hubiera)
type SearchScreenProps = {};

// Componente funcional principal
const SearchScreen: React.FC<SearchScreenProps> = ({}) => {
  return (
    <SafeAreaView >
      <View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
};

// Estilos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#007BFF',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SearchScreen;
