import { createTheme, Theme } from '@mui/material';

export const MixTheme: Theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&::after': {
            border: 'none',
          },
          '&::before': {
            border: 'none',
          },
          '&::hover': {
            border: '1px solid #B9C4CC',
            outline: 'none',
          },
          '&::focus-visible': {
            outline: 'none',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 'none',
          },
          '&.Mui-disabled:before': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            border: '1px solid #D93025',
          },
          '&::after': {
            border: 'none',
          },
          '&.Mui-disabled': {
            border: '1px solid #C4CED6',
            background: '#E0EBF2',
            color: '#1D2123',
            fontWeight: 600,
            fontSize: '0.8125rem',
            opacity: 1,
          },
        },
        input: {
          color: '#1D2123',
          fontWeight: 600,
          fontSize: '0.8125rem',
          '&[type=number]': {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '&::-moz-appearance': 'textfield',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
            {
              display: 'none',
            },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: "Quicksand";
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                text-transform: none;
                font-size: 16px;
              }
            `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Quicksand',
          textTransform: 'none',
          borderRadius: '40px',
          fontWeight: 700,
          fontSize: '1rem',
          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            opacity: 0.8,
          },
          '&.Mui-disabled': {
            opacity: 0.7,
          },
        },
        contained: {
          color: '#FFF',
        },
        containedPrimary: {
          '&.Mui-disabled': {
            background: '#2F6890',
            color: '#FFF',
          },
          '&:hover': {
            background: '#2F6890',
            color: '#FFF',
          },
        },
        containedSecondary: {
          color: '#2F6890',
          borderColor: '1px solid #2F6890',
          '&.Mui-disabled': {
            backgroundColor: '#FFF',
            color: '#2F6890',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          border: '1px solid #D7D8DB',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08)',
          borderRadius: '4px',
        },
      },
    },
    MuiDivider: {
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: {
            ':before': {
              borderTop: 'thin solid #D7D8DB',
            },
            ':after': {
              borderTop: 'thin solid #D7D8DB',
            },
          },
        },
      ],
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C4665E6',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 4,
          borderRadius: 5,
        },
        bar: {
          backgroundColor: '#15BE77',
        },
        colorPrimary: {
          backgroundColor: '#CADCEA',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: '#FFF',
          '&.Mui-disabled': {
            backgroundColor: '#E0EBF2',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: '#FFF',
          border: '1px solid #C4CED6',
          padding: '0 12px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#4A4A4A',
          fontSize: '0.75rem',
          fontWeight: 500,
          borderBottom: '1px solid #DCE5EB',
          padding: '6px 10px',
          minHeight: '35px !important',
          '&:last-child': {
            borderBottom: 'none',
          },
          '&.Mui-selected': {
            backgroundColor: '#2F6890',
            borderRadius: '5px',
            color: '#FFF',
            '&:hover': {
              backgroundColor: '#2F6890',
              borderRadius: '5px',
              color: '#FFF',
            },
          },
          '&:hover': {
            backgroundColor: '#2F6890',
            color: '#FFF',
            borderRadius: '5px',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#4A4A4A',
          fontSize: '0.8125rem',
          fontWeight: 600,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#2F6890',
          height: '5px',
          borderRadius: '10px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#4A4A4A',
          fontSize: '1rem',
          fontWeight: 400,
          '&.Mui-selected': {
            fontWeight: 600,
          },
          '&:hover': {
            color: '#2F6890',
            fontWeight: 600,
          },
        },
      },
    },
  },
  palette: {
      primary: {
          main: '#2F6890',
          contrastText: '#2F6890',
          light: '#668CA7',
          dark: '#334262',
      },
      secondary: {
          main: '#FFF',
          contrastText: '#FFF',
          '100': '#000',
      },
      background: {
          default: '#FFFFFF',
          paper: '#F6FBFF',
      },
      text: {
          primary: '#222A2F',
      },
      black: {
          main: '#000',
          light: '#2D2D2D',
          dark: '#2F689026',
      },
      info: {
          main: '#D2ECFF',
          dark: '#1880CA',
          contrastText: '0px 0px 10px 6px rgba(0, 132, 222, 0.10)',
          light: '#ECF7FF',
      },
      grey: {
          100: '#C3D8E9',
          200: '#C3D0DA',
          300: '#1D2123',
          400: '#2F689033',
          500: '#A1A5AB',
          600: '#4A4A4A',
          700: '#C4CED6',
          800: '#EBF3F8',
          900: '#DCE5EB',
      },
      error: {
          main: '#D93025',
      },
      navBar: {
          lightBackground: '#164568',
          darkBackground: '#1A5279',
          boxShadow: '4px 0px 6px 0px rgba(38, 87, 169, 0.25)',
          activeBorder: '#F9E190',
          activeBackground: 'linear-gradient(90deg, #164568 0%, #1A5279 50%)',
          subMenuActiveBorder: '#2B6D9B',
          subMenuActiveBackground: '#205781',
          headerBorder: '#BDD3E0',
          batchColor: '#163F5C',
      },
      kycOptionCard: {
          boxShadow: '0px 0px 14px 0px rgba(47, 104, 144, 0.15)',
          border: '#C6D9E7',
          selectedBoxShadow: '0px 10px 20px 0px rgba(47, 104, 144, 0.18)',
          successColor: '#00B96B',
      },
      lightBlue: '',
      ceylonBlue: '',
      instructionBoxShadow: '',
      green: '',
      green70: '',
      green50: '',
      error70: '',
      investBorder: '',
      investBorderBottom: '',
      investDividerStyle: '',
      investShadowStyle: '',
      powderBlue: '',
      cornFlowerBlue: '',
      lightGreen: '',
      tealGreen: '',
      lightSkyBlue: '',
      cardShadow: '',
      failedBorder: '',
      borrowerBorder: '',
      borrowerTableBorder: '',
      borrowerTableContainer: '',
      borrowerTableBody: '',
      transaction: {
          successBg: '',
          successBorder: '',
          successText: '',
          failedBg: '',
          failedBorder: '',
          failedText: '',
          shadowColor: ''
      },
      investmentViewTrends: '',
      investmentViewTrendShadow: '',
      investmentsDivider: '',
      viewTrendsContainer: '',
      viewTrendsToggleButton: '',
      viewTrendsBorder: '',
      darkBlack: '',
      filterDropdownBorder: '',
      filterDropdownShadow: '',
      repaymentDottedColor: ''
  },
});
