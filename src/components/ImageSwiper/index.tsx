import React from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import type {ImageSwiperProps} from '../../types/componentProps';
import {useRef} from 'react';

const ImageSwiper = (props: ImageSwiperProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.container, {...props.style}]}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        {props.images.map((image, index) => {
          return (
            <View
              style={[styles.cardContainer, {width: windowWidth}]}
              key={index}>
              <ImageBackground source={{uri: image}} style={styles.card} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {props.images.map((_, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 250,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
});

export default ImageSwiper;
