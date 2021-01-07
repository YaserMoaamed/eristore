import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import Explore from '../components/Explore'
export default function ExploreScreen() {
  return (
    <View style={styles.container}>
        <Explore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
   }
});