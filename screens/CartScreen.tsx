import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import Cart from '../components/Cart';
import Search from '../components/Search';

export default function CartScreen() {
  return (
    <View style={styles.container}>
       <Cart />
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