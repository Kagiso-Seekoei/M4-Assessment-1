import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';


export default function App() {


  return (
    <View style={styles.container}>
     <MapView style={styles.map} 
              initialRegion={{
                longitude: 18.419167,
                latitude: -33.926111,
                latitudeDelta: 0.0018,
                longitudeDelta: 0.0017
              }}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

