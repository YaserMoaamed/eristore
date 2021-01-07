import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import Favorite from '../components/Favorite';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
       <Favorite />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center'
   }
});