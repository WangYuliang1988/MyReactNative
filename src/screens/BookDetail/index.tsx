import React from 'react';
import {StyleSheet, Text} from 'react-native';
import FadeInView from '../../components/FadeInView';
import type {BookDetailProps} from '../../types/navigationProps';

const BookDetail = ({route}: BookDetailProps) => {
  return (
    <FadeInView style={styles.container} duration={3000}>
      <Text style={styles.infoText}>{route.params.bookName}</Text>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BookDetail;
