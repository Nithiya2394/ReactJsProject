import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';

const useHeaderStyles = () => {
  const theme = useTheme();

  return useMemo(() => ({
    header: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '200px',
      padding: '10px 0', // ✅ Changed from paddingY to valid CSS
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      position: 'relative',
      marginBottom: '20px',
      width: 'fit-content',
      marginLeft: '60px',
      marginTop: '-20px',
    },
    leftAlign: {
      alignItems: 'flex-start', // ✅ use valid CSS value
    },
    centerAlign: {
      alignItems: 'center',
    },
    headerUnderline: {
      width: '30%',
      height: '6px',
      backgroundColor: '#1A8EB8',
      position: 'absolute',
      bottom: '-4px',
      borderRadius: '10px',
    },
    headerText: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#000',
    },
  }), [theme]);
};

export default useHeaderStyles;
