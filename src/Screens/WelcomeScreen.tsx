// Importa los módulos necesarios de React Native y React Navigation
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Define los tipos de propiedades (si las hubiera)
type WelcomeScreenProps = {};

// Componente funcional principal
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Bienvenido a ServiApp</Text>
      <Text style={styles.infoText}>Los 6 mejores Servicios</Text>
      {/* Sección de imágenes */}
      <View style={styles.imageSection}>
        <Image
          source={{ uri: 'https://titulae.es/wp-content/uploads/2023/10/que-es-manicurista.jpg' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2150289105/display_1500/stock-photo-african-american-female-chef-having-fun-while-preparing-food-in-the-kitchen-at-restaurant-2150289105.jpg' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        /> 
      </View>
      <View style={styles.imageSection}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4s_-KLXK_hpAbwSs2XXex2u8EFzeSMGWizg&s' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://m.rastro.com/fotos3/2023/09/26/12101625_foto1.jpg' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        /> 
      </View>
      <View style={styles.imageSection}>
        <Image
          source={{ uri: 'https://cdn.babysits.com/content/es/article/actividades-de-ni%C3%B1era-para-ni%C3%B1os-3127-1656409496.jpg' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xcuncP-RvGmX-T1r3LYULVrfmKly15Ahdg&s' }} // URL de la imagen (sustitúyelo por tu propia URL)
          style={styles.image}
          resizeMode="cover"
        /> 
      </View>

      {/* Sección de información */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          Somos una aplicacion en donde puedes solicitar y 
          brindar algun servicio de desees dar 
          
        </Text>
      </View>
    </ScrollView>
  );
};

// Estilos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Alineación justificada del texto
    lineHeight: 24, // Altura de línea para mejorar la legibilidad
    marginBottom: 10,
    marginTop: 10, // Margen superior de 10 puntos
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  infoSection: {
    marginBottom: 20,
  }
});

export default WelcomeScreen;