import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from 'nativewind';
import { AntDesign } from '@expo/vector-icons';

import { ChatScreenNavigationProp} from 'src/navigation/navigationTypes';


interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: number;
  description: string;
}

interface ChatScreenProps {
  navigation: ChatScreenNavigationProp;
}
const navigatetoChat = () => {
  navigation.navigate('Chat');
  
const ProductCard: React.FC<ProductCardProps> = ({ image, category, title, price, description }) => {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image }} 
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.counterContainer}>
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count > 1 ? count - 1 : 1)}
            />
            <Text style={styles.countText}>{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text style={styles.priceText}>${price * count}</Text>
        </View>
        <Text numberOfLines={2} style={styles.descriptionText}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={navigatetoChat} >
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver mapa</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 24, // rounded-3xl
    padding: 20, // p-5
    marginVertical: 20, // my-5
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 12, // rounded-xl
  },
  image: {
    width: '100%',
    height: 288, // h-72
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 20, // mt-5
  },
  categoryText: {
    fontSize: 12, // text-sm
    color: 'rgba(0, 0, 0, 0.6)', // text-black/60
  },
  titleText: {
    fontSize: 18, // text-lg
    fontWeight: '600', // font-semibold
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // gap-3
    justifyContent: 'space-between',
    marginVertical: 12, // my-3
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // gap-3
  },
  countText: {
    fontSize: 24, // text-xl
  },
  priceText: {
    fontSize: 24, // text-2xl
    fontWeight: '800', // font-extrabold
  },
  descriptionText: {
    fontSize: 12, // text-sm
    color: 'rgba(0, 0, 0, 0.6)', // text-black/60
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '83.33%', // w-10/12
    alignSelf: 'center',
    backgroundColor: 'green', // bg-black
    padding: 12, // p-3
    borderRadius: 24, // rounded-full
    marginTop: 20, // mt-5
  },
  buttonText: {
    color: 'white', // text-white
    fontWeight: 'bold', // font-bold
  },
});

export default ProductCard;
