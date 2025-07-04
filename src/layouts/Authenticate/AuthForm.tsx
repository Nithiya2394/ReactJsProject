'use client';
import React from 'react';
import Image from 'next/image';
import { LoginImages } from '@/assets/images/login';
import { useTranslation } from 'react-i18next';
import useAuthStyle from './useAuthStyle';
import { Box } from '@mui/material';
import Header from '@/components/Header/Header'; 
import useAuthFormModal from './useAuthFormModal';   
import AuthLogin from './AuthLogin';
import AuthEmail from './AuthEmail';
import AuthOTP from './AuthOTP';
import AuthResetPassword from './AuthResetPassword';
import { AuthContainer, CenteredGridItem, StepSubtitle } from './AuthComponents';

const AuthForm = () => {
    const { t } = useTranslation();
    const classes = useAuthStyle();
   const { formik, step, setStep, showPassword,apiError, setApiError, loading, passwordResetSuccess, setPasswordResetSuccess,
    handleTogglePassword, handleForgotPassword
    } = useAuthFormModal();
  const renderStepContent = () => {
  switch (step) {
    case 1:
      return <AuthLogin {...{ formik, t, showPassword, handleTogglePassword, handleForgotPassword, apiError, setApiError, loading }} />;
    case 2:
      return <AuthEmail {...{ formik }} />;
    case 3:
      return <AuthOTP {...{ formik}} />;
    case 4:
      return <AuthResetPassword {...{ formik, passwordResetSuccess, setPasswordResetSuccess, setStep, setApiError }} />;
    default:
      return null;
  }
};
    return(
      <Box sx={classes.container}>
      <Box sx={classes.heroImage} />
      <Box sx={classes.wrapper}>
        <Box sx={classes.formContainer}>
        <Box sx={classes.formWrapper}>
          {/* <Image
            src={LoginImages.BarsURL}
            alt="bars"
            style={classes.bars}
            width={300}
            height={250}
          /> */}
          <Image
            src={LoginImages.UpArrowsURL}
            alt="arrows"
            style={classes.arrowsUp}
            width={300}
            height={250}
          />
           <CenteredGridItem size={{  md: 6, xs: 12 }}>
              <AuthContainer>
                <Header 
                title={
                  step === 1
                  ? t('authScreen.loginTitle')
                  : step === 2
                  ? t('authScreen.ForgotPasswordTitle')
                  : step === 3
                  ? t('authScreen.ForgotPasswordTitle')
                  : t('authScreen.changePasswordTitle')
                }
                /> 
                <StepSubtitle variant="body1">                 
                {step === 1
                  ? t('authScreen.Subtitle')
                  : step === 2
                  ? t('authScreen.ForgotPasswordSubtitle')
                  : step === 3
                  ? t('authScreen.otpInstruction')
                  : t('authScreen.changePasswordSubTitle')}
                </StepSubtitle>
                <form onSubmit={formik.handleSubmit}>
                  {renderStepContent()}
                </form>               
              </AuthContainer>
           </CenteredGridItem>
        </Box>
        </Box>
      </Box>
</Box>
     
    )
}
export default AuthForm;

