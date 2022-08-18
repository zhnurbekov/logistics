import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '../common/ThemeProvider/ThemeProvider';
import Root from './Root';
import { Provider } from 'react-redux';
import { store } from '../_helpers/store';

export const dispatch = store.dispatch;
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}
