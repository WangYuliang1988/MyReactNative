import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

type AppProps = {
  initialAppName: string;
};

type ImageSwiperProps = {
  style?: ViewStyle;
  images: string[];
};

type FadeInViewProps = PropsWithChildren<{
  style?: ViewStyle;
  duration: number;
}>;

export type {AppProps, ImageSwiperProps, FadeInViewProps};
