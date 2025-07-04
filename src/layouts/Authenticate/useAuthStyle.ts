import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { LoginImages } from '@/assets/images/login'; 

const useAuthStyle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return useMemo(() => {
    return {
      container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: { lg: 'row', md: 'row', xs: 'column' },
        overflow: { lg: 'hidden', md: 'hidden', xs: 'auto' },
        position: 'relative',
      },
      wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'static',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        zIndex: 2,
      },
      heroImage: {
        width: isMobile ? '100%' : '50%',
        height: isMobile ? '60%' : '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: isMobile
          ? `url(${LoginImages.BarsURL.src})`
          : `url(${LoginImages.BarsURL.src})`,
        position: 'static',
        zIndex: 1,
      },
      formContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      formWrapper: {
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      },
      cardWrapper: {
        backgroundColor: '#fff',
        border: `1px solid ${theme.palette.grey[100]}`,
        boxShadow: `10px 10px 15px 0px ${theme.palette.grey[400]}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { lg: '40px 50px', md: '40px 50px', xs: '20px' },
        borderRadius: '15px',
        zIndex: 2,
        position: { lg: 'static', md: 'static', xs: 'absolute' },
        top: { lg: 'unset', md: 'unset', xs: '40%' },
        width: { lg: 'unset', md: 'unset', xs: '90%' },
      },
      subTitle: {
        fontSize: '1rem',
        width: { lg: '360px', md: '360px', xs: '100%' },
        textAlign: 'left',
        // color: theme.palette.grey[300],
        fontWeight: '600',
        marginBottom: '20px',
        marginRight: '44px',
      },
      inputContainer: {
        position: 'relative',
      },
      inputWidthStyle: {
        marginBottom: '20px',
        width: '100%',
      },

      containerStyle: {
        width: { lg: '360px', md: '360px', xs: '100%' },
      },
      inputDescription: {
        fontSize: '0.75rem',
        color: theme.palette.primary.contrastText,
        fontWeight: '500',
      },
      buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '152px',
        justifyContent: 'center',
        alignItems: 'center',
      },
      termsAndConditions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5px',
        fontSize: '0.8125rem',
        fontWeight: '500',
        color: theme.palette.grey[600],
      },
      hyperLink: {
        fontWeight: '700',
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: '0.8125rem',
        color: theme.palette.primary.main,
      },
      sendOTPButton: {
        width: '150px',
        fontWeight: '700',
      },
      errorStyle: {
        fontSize: '0.8125rem',
        position: 'absolute',
        bottom: '-2rem',
      },
      dialogContainerStyle: {
        width: '800px',
      },
      // Styles for absolute elements
      bars: {
        width: '300px',
        height: '250px',
        position: 'absolute',
        bottom: '0',
        left: '-1.5rem',
        display: isMobile ? 'none' : 'block',
      } as React.CSSProperties,
      arrowsUp: {
        width: '300px',
        height: '250px',
        position: 'absolute',
        top: '0',
        right: '-4rem',
        display: isMobile ? 'none' : 'block',
      } as React.CSSProperties,
    };
  }, [theme, isMobile]);
};

export default useAuthStyle;
