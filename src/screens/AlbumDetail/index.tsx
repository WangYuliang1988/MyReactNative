import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AlbumDetailProps} from '../../types/navigationProps';
import ImageSwiper from '../../components/ImageSwiper';

const images: string[] = [];
for (let i = 1; i <= 6; i++) {
  images.push(`https://yigelangzi.com/static/images/profile-${i}.jpg`);
}

const AlbumDetail = ({route}: AlbumDetailProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Album: {route.params.albumName}</Text>
      <ImageSwiper images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default AlbumDetail;
