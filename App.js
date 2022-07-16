import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import Content from './components/Content';
import HeaderComponent from './components/HeaderComponent';
import LanguageProvider from './contexts/LanguageContext';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Content />
      </ThemeProvider>
    </LanguageProvider>
  );
}
