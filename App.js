import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Routes from './router/routes';



const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3c3c3c',
      placeholder: '#fff',
      text: '#fff'
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Routes />
    </PaperProvider>
  )
}

export default App;