import React from 'react';
import {AppNames} from './types/commonEnums';
import BookApp from './navigations/BookNavigator';
import MusicApp from './navigations/MusicNavigator';
import {AppProps} from './types/componentProps';

const App = (props: AppProps) => {
  switch (props.initialAppName) {
    case AppNames.Book:
      return <BookApp />;
    case AppNames.Music:
      return <MusicApp />;
    default:
      return <MusicApp />;
  }
};

export default App;
