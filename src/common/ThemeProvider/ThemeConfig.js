export default function (isDark) {
  const primary = { main: isDark ? '#673BB6' : '#2A2E37' };
  const secondary = { main: isDark ? '#FEBA00' : '#FEBA00' };

  return {
    isDark: isDark,
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: primary,
      secondary: secondary,
      action: { main: '#ACACAC', selected: '#E3E6EB', focus: '#858993' },
      background: {
        default: isDark ? '#191919' : '#F9F9F9',
        paper: isDark ? '#333333' : '#F9F9F9',
      },
      text: {
        secondary: isDark ? 'rgba(255, 255, 255, 0.7)' : '#82868C',
      },
    },
    typography: {
      fontFamily: 'Nunito',
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiDesktopDatePicker: {
        defaultProps: {
          inputFormat: 'DD.MM.yyyy',
          mask: '__.__.____',
        },
      },
      MuiFilledInput: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiFormControl: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiInputBase: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiInputLabel: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          margin: 'dense',
        },
      },
      MuiFab: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiTable: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiTextField: {
        defaultProps: {
          margin: 'dense',
          fullWidth: true,
        },
      },
      MuiToolbar: {
        defaultProps: {
          variant: 'dense',
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: '18px',
            LineHeight: '25px',
            fontWeight: 400,
          },
          body2: { fontSize: 14, lineHeight: '21px', fontWeight: 400 },
          body1: { fontSize: 13, lineHeight: '18px', fontWeight: 400 },
          caption: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
        },
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          '&$selected': {
            backgroundColor: '#FF0000',
          },
        },
        selected: {
          backgroundColor: '#FF0000',
        },
      },
    },
  };
}
