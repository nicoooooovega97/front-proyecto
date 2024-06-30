
import * as React from "react";
import { StyleSheet,Text,View } from "react-native";
import MapView ,{Marker,Polyline} from "react-native-maps";

export default function MapsScreen (){
    const[origin,setOrigin] = React.useState({
        latitude: -28.9649448,
        longitude;  -71.3476325,
    });

    const[destination,setDestination] = React.useState({
        latitude: -29.9649448,
        longitude;  -71.3476325,
    });
    return( 
        <View style = {styles.container}> 
            <MapView 
            style ={styles.map} 
            initialRegion = {{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
            }}
        >
            <Marker
                draggable 
                coordinate={origin}>
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
            </Marker>
            <Marker
                draggable
                coordinate={destination}>
                onDragEnd = {(direction)=> setDestination(direction.nativeEvent.coordinate)}
            </Marker>
        </MapView>
        <View/>
    );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        width:'100%',
        height:'100%'
    }
})