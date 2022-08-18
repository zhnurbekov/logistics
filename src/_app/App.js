import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../common/ThemeProvider/ThemeProvider';
import Root from './Root';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
          <Root />
      </ThemeProvider>
    </BrowserRouter>
  );
}
