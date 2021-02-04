import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Movie from '../src/pages/Movie';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator 
      activeColor={'#fff'}
      barStyle={{ backgroundColor: '#141414' }}
      initialRouteName='Home'
      shifting={false}
    >
      <Tab.Screen 
        key={1}
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => ( <Icon name='home' color={color} size={26} /> )
        }}
      />
      <Tab.Screen 
        key={2}
        name='Search'
        component={Home}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => ( <Icon name='magnify' color={color} size={26} /> )
        }}
      />
      <Tab.Screen 
        key={3}
        name='Soon'
        component={Home}
        options={{
          tabBarLabel: 'Em breve',
          tabBarIcon: ({ color }) => ( <Icon name='play-speed' color={color} size={26} /> )
        }}
      />
      <Tab.Screen 
        key={4}
        name='Downloads'
        component={Home}
        options={{
          labeled: true,
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color }) => ( <Icon name='download' color={color} size={26} /> )
        }}
      />
      <Tab.Screen 
        key={5}
        name='More'
        component={Home}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ color }) => ( <Icon name='menu' color={color} size={26} /> )
        }}
      />
    </Tab.Navigator>
  )
}

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          options={{headerShown: false}}
          name='Login' 
          component={Login} 
        />
        <Stack.Screen 
          options={{headerShown: false}}
          name='Home' 
          component={HomeTabs}
        />
        <Stack.Screen 
          options={{headerShown: false}}
          name='Movie' 
          component={Movie} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;