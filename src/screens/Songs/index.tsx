import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {SongsScreenProps} from '../../types/navigationProps';

const Songs = ({route}: SongsScreenProps) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'A', data: ['A-1', 'A-2', 'A-3']},
          {title: 'B', data: ['B-1', 'B-2', 'B-3']},
          {title: 'C', data: ['C-1', 'C-2', 'C-3']},
          {title: 'X', data: ['X-1', 'X-2', 'X-3']},
          {title: 'Y', data: ['Y-1', 'Y-2', 'Y-3']},
          {title: 'Z', data: ['Z-1', 'Z-2', 'Z-3']},
        ]}
        renderSectionHeader={({section}) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={item => `key-${route.params.type}-${item}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    height: 36,
    fontSize: 18,
  },
});

export default Songs;
