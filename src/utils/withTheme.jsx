import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 13,
    title: {
      letterSpacing: '0',
    },
    headline: {
      fontSize: '1.19rem',
    },
    body1: {
      fontSize: '0.9rem',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: '400',
      letterSpacing: '0',
    },
    caption: {
      fontSize: '0.7rem',
      letterSpacing: '-0.7px',
    },
  },

  spacing: {
    size1: '0.25rem',
    size2: '0.50rem',
    size3: '1rem',
    size4: '1.5rem',
    size5: '3rem',
  },

  palette: {
    secondary: {
      light: '#f0f0f0',
      main: '#fff',
      dark: '#ff0033',
    },
  },

  overrides: {
    MuiButton: {
      root: {
        fontSize: 14,
        color: 'white',
        fontWeight: 300,
        borderRadius: 4,
        fontFamily: 'Fira Sans, sans-serif',
        '-webkit-appearance': 'none',
        backgroundColor: '#b4b4b4',
        boxShadow: '0px 2px 0px rgba(0,0,0,0.15)',
        '-webkit-box-shadow': '0px 2px 0px rgba(0,0,0,0.15)',
        '&:hover': {
          color: 'black',
        },
      },
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
