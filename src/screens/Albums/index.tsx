import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AlbumsScreenProps} from '../../types/navigationProps';
import {ScreenNames} from '../../types/commonEnums';

const Albums = ({route, navigation}: AlbumsScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'A'},
          {key: 'B'},
          {key: 'C'},
          {key: 'D'},
          {key: 'E'},
          {key: 'F'},
          {key: 'G'},
          {key: 'H'},
          {key: 'I'},
          {key: 'J'},
          {key: 'K'},
          {key: 'L'},
          {key: 'M'},
          {key: 'N'},
          {key: 'O'},
          {key: 'P'},
          {key: 'Q'},
          {key: 'R'},
          {key: 'S'},
        ]}
        keyExtractor={item => `key-${route.params?.type}-${item.key}`}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenNames.AlbumDetail, {
                albumName: item.key,
              })
            }>
            <View>
              <Text style={styles.item}>{item.key}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    height: 40,
    fontSize: 18,
  },
});

export default Albums;
