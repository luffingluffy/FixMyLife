import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'FixMyLife',
                    headerStyle: {
                        backgroundColor: '#000743'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontWeight: 'bold',
                        fontFamily: 'HeadlinerNo.45'
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default AppStack;
