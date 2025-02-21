import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ScreenNames} from './commonEnums';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type MusicTabParamList = {
  [ScreenNames.Songs]: {type: number};
  [ScreenNames.AlbumStackScreen]: undefined;
};

type SongsScreenProps = BottomTabScreenProps<
  MusicTabParamList,
  ScreenNames.Songs
>;

type AlbumStackParamList = {
  [ScreenNames.Albums]: {type: number} | undefined;
  [ScreenNames.AlbumDetail]: {albumName: string};
};

type AlbumsScreenProps = NativeStackScreenProps<
  AlbumStackParamList,
  ScreenNames.Albums
>;

type AlbumDetailProps = NativeStackScreenProps<
  AlbumStackParamList,
  ScreenNames.AlbumDetail
>;

type BookStackParamList = {
  [ScreenNames.Books]: {publishYear: string} | undefined;
  [ScreenNames.BookDetail]: {bookName: string};
};

type BooksScreenProps = NativeStackScreenProps<
  BookStackParamList,
  ScreenNames.Books
>;

type BookDetailProps = NativeStackScreenProps<
  BookStackParamList,
  ScreenNames.BookDetail
>;

export type {
  MusicTabParamList,
  SongsScreenProps,
  AlbumStackParamList,
  AlbumsScreenProps,
  AlbumDetailProps,
  BookStackParamList,
  BooksScreenProps,
  BookDetailProps,
};
