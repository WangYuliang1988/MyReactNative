import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ScreenNames} from '../types/commonEnums';
import Albums from '../screens/Albums';
import Songs from '../screens/Songs';
import AlbumDetail from '../screens/AlbumDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {
  AlbumStackParamList,
  MusicTabParamList,
} from '../types/navigationProps';

const AlbumStack = createNativeStackNavigator<AlbumStackParamList>();

const AlbumStackScreen = () => {
  return (
    <AlbumStack.Navigator>
      <AlbumStack.Screen
        name={ScreenNames.Albums}
        component={Albums}
        initialParams={{type: 200}}
      />
      <AlbumStack.Screen
        name={ScreenNames.AlbumDetail}
        component={AlbumDetail}
      />
    </AlbumStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<MusicTabParamList>();

const MusicNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={ScreenNames.Songs}
          component={Songs}
          initialParams={{type: 100}}
        />
        <Tab.Screen
          name={ScreenNames.AlbumStackScreen}
          component={AlbumStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const MusicApp = () => {
  return <MusicNavigation />;
};

export default MusicApp;
