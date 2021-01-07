import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ShopScreen from '../screens/ShopScreen';
import { BottomTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <Entypo name="shop" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialIcons name="explore" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="cart" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Favorite"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialIcons name="favorite-border" size={24} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="account-tie" size={24} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}
