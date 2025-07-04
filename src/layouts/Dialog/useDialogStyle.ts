import { useMemo } from 'react';

const useDialogStyle = () => {
  return useMemo(() => {
    return {
      container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // backgroundColor: dialogStyle.backgroundColor,
        borderRadius: '10px',
        padding: '30px',
        width: { lg: 400, xs: 350 },
        '&:focus-visible': {
          outline: 'none',
        },
      },
      subTitle: {
        textAlign: 'center',
        // color: dialogStyle.subTitleColor,
        fontSize: '1rem',
        fontWeight: '600',
      },
      buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '30px',
      },
      button: {
        width: { lg: '160px', xs: '110px' },
        height: '40px',
      },
      header: {
        display: 'flex',
        paddingBottom: '20px',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
      },
      title: {
        fontSize: '1.25rem',
        // color: dialogStyle.titleColor,
      },
    };
  }, []);
};

export default useDialogStyle;
