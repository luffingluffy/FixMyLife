import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TaskScreen from '../screens/TaskScreen';
import BattleScreen from '../screens/BattleScreen';
import CharacterScreen from '../screens/CharacterScreen';
import ShopScreen from '../screens/ShopScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Task Screen"
        component={TaskScreen}
        options={({route}) => ({
          tabBarLabel: 'Tasks',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Battle Screen"
        component={BattleScreen}
        options={({route}) => ({
          tabBarLabel: 'Battle',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="sword-cross"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Character Screen"
        component={CharacterScreen}
        options={({route}) => ({
          tabBarLabel: 'Character',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Shop Screen"
        component={ShopScreen}
        options={({route}) => ({
          tabBarLabel: 'Shop',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              color={color}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
