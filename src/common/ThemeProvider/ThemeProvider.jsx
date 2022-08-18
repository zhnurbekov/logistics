import React, { useMemo } from 'react';
import ThemeConfig from './ThemeConfig';
import { ThemeWrapper } from './ThemeStyle';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import MuiLocalization from './MuiLocalization';

export default function ThemeProvider({ children }) {
  const { i18n } = useTranslation();
  const { locale } = MuiLocalization(i18n);

  const theme = useMemo(() => createTheme(ThemeConfig(false), locale), []);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeWrapper theme={theme}>
        <StyledProvider theme={theme}>{children}</StyledProvider>
      </ThemeWrapper>
    </MuiThemeProvider>
  );
}
