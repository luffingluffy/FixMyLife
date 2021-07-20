import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TaskScreen}
        options={{
          title: 'FixMyLife',
          headerStyle: {
            backgroundColor: '#000743',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'HeadlinerNo.45',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
