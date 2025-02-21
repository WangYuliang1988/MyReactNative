import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import type {BooksScreenProps} from '../../types/navigationProps';
import {ScreenNames} from '../../types/commonEnums';

const Books = ({route, navigation}: BooksScreenProps) => {
  const onPressButton = () => {
    navigation.navigate(ScreenNames.BookDetail, {bookName: '金明馆丛稿初编'});
  };

  const onLongPressButton = () => {
    Alert.alert('You long-pressed the button!');
  };

  const publishYear = route.params?.publishYear;

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Imagine there are lots of books
        {publishYear ? ` published in ${publishYear}` : ''} listed here.
      </Text>

      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={onPressButton}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : undefined
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback
            {Platform.OS !== 'android' ? ' (Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableHighlight
        onPress={onPressButton}
        onLongPress={onLongPressButton}
        underlayColor="White">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  button: {
    width: 260,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default Books;
