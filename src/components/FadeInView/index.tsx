import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import type {FadeInViewProps} from '../../types/componentProps';

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // initial value for view's opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
