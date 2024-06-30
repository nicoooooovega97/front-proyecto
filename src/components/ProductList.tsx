import * as React from 'react';
import { FlatList, Text } from 'react-native';
import { products } from 'src/Screens/Products'; // Asegúrate de que la ruta y la exportación sean correctas
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <FlatList
      data={products}
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
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
}

export default ProductList;
