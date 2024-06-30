import ProductCard from '@components/ProductCard';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { products } from 'src/Screens/Products';

const CategoriesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar productos..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => (
          <ProductCard 
            image={item.image}
            category={item.category}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fondo blanco
    paddingTop: 50, // Para evitar que la barra de búsqueda quede pegada al borde superior
  },
  searchBar: {
    height: 40,
    borderColor: '#cccccc', // Color del borde
    borderWidth: 1,
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 10, // Espacio entre la barra de búsqueda y la lista
  },
  listContainer: {
    paddingHorizontal: 15,
  },
});

export default CategoriesScreen;
