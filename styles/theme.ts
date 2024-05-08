'use client';
import { createTheme } from '@mui/material/styles';
import {css} from '@emotion/react'
import { TextColor, bodyGray, darkGray, error, gray, info, light, lightGray, primaryTextColor, silver, success, warning } from './SharedStyle';




const MuiTheme = createTheme({
  palette: {
    mode: 'light',
  },
  
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

const sharedTheme = {
  textSizes: {
    s: 10,
    m: 14,
    l: 18,
    xl: 24,
  },
  utils: {
    
    quickTransition: `0.125s ease-in-out`,
    normalTransition: `0.250s ease-in-out`,
 
  },
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  shadow: {
    m: css`
      box-shadow: rgb(13 13 13 / 4%) 1px -1px 12px 6px;
    `,
    l: css`
      box-shadow: rgba(3, 8, 20, 0.1) 0 0.15rem 0.5rem,
        rgba(2, 8, 20, 0.1) 0 0.075rem 0.175rem;
    `,
  },
};

export const emotionTheme = {
  colors: {
    primary: {
      light: '#FF3100',
      lightMobile: '#FC5C42',
      dark: '#3f4254',
      contrastText: '#f9fafa',
      primaryTextColor,
      clientTextColor: TextColor,
    },
    status: {
      success,
      warning,
      error,
      info,
    },
    bodyGray,
    light,
    gray,
    darkGray,
    lightGray,
    silver,
    black0: TextColor,
  },
  ...sharedTheme,
};

export default MuiTheme;
