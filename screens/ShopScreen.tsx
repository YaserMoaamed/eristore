import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text>Shop Screen</Text>
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
