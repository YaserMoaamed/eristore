import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Shop"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <Entypo name="shop" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialIcons name="explore" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="cart" size={24} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Favorite"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialIcons name="favorite-border" size={24} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="account-tie" size={24} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
