import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Component from './components/MyComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
