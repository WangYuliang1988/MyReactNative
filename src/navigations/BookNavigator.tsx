import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenNames} from '../types/commonEnums';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';
import {BookStackParamList} from '../types/navigationProps';

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.Books}>
        <Stack.Screen
          name={ScreenNames.Books}
          component={Books}
          initialParams={{publishYear: '1980'}}
        />
        <Stack.Screen name={ScreenNames.BookDetail} component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BookApp = () => {
  return <BookNavigation />;
};

export default BookApp;
