import * as React from 'react';
import { StyleSheet } from 'react-native';

 import { Text, View } from 'react-native';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
       <Text>Text Shop Icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
