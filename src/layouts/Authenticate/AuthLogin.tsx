import {
    Box,
    Checkbox,
    CircularProgress,
    IconButton,
    InputAdornment,
  } from '@mui/material';
  import { Visibility, VisibilityOff } from '@mui/icons-material';
  import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthApiError, AuthBoxText, AuthButton, AuthSubTitle, ForgotPasswordText, StyledFormControlLabel, StyledTextField } from './AuthComponents';
  type AuthLoginProps ={
    formik: {
      values: { username: string; password: string };
      errors: { username?: string; password?: string };
      touched: { username?: boolean; password?: boolean };
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
      isValid: boolean;
      dirty: boolean;
    };
    showPassword: boolean;
    handleTogglePassword: () => void;
    handleForgotPassword: () => void;
    apiError: string;
    setApiError: (value: string) => void;
    loading: boolean;
  }  
  const AuthLogin = ({
    formik,
    showPassword,
    handleTogglePassword,
    handleForgotPassword,
    apiError,
    setApiError,
    loading,
  }: AuthLoginProps) => {
      const { t } = useTranslation();
    return (
      <>
        <AuthSubTitle>
          {t('authScreen.UserName')}
        </AuthSubTitle>
        <StyledTextField
          fullWidth
          name="username"
          placeholder="Enter"
          margin="normal"
          variant="outlined"
          value={formik.values.username}
          onChange={(e) => {
            formik.handleChange(e as React.ChangeEvent<HTMLInputElement>);
            setApiError('');
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />  
        <AuthSubTitle>
          {t('authScreen.Password')}
        </AuthSubTitle>
        <StyledTextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter"
          margin="normal"
          variant="outlined"
          value={formik.values.password}
          onChange={(e) => {
            formik.handleChange(e as React.ChangeEvent<HTMLInputElement>);
            setApiError('');
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />  
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <StyledFormControlLabel
            control={<Checkbox size="small" />}
            label="Remember me"
          />
          <ForgotPasswordText
            variant="body2"
            onClick={handleForgotPassword}
          >
            {t('authScreen.ForgotPassword')}
          </ForgotPasswordText>
        </Box>  
        {apiError && (
          <AuthApiError color="error">
            {apiError}
          </AuthApiError>
        )}
        {loading && (
          <Box mt={2} display="flex" justifyContent="center">
            <CircularProgress size={24} />
          </Box>
        )}  
        <AuthBoxText>
          <AuthButton
            variant="contained"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}           
          >
            {t('authScreen.loginTitle')}
          </AuthButton>
        </AuthBoxText>
      </>
    );
  };  
  export default AuthLogin;
  