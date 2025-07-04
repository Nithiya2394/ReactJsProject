import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AuthBoxText, AuthButton, AuthSubTitle, StyledOtpInput } from './AuthComponents';

type AuthOtpProps = {
    formik: {
        values: { username: string; password: string; email: string } & { [key: `otp${number}`]: string };
        errors: { username?: string; password?: string; email?: string } & Record<`otp${number}`, string | undefined>;
        touched: { username?: boolean; password?: boolean; email?: boolean } & Record<string, boolean | undefined>;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
        setFieldValue: (field: string, value: string | number | boolean | null | undefined, shouldValidate?: boolean) => void;
        isValid: boolean;
        dirty: boolean;
      };
  }
const AuthOTP = ({ formik }: AuthOtpProps) => {
    const { t } = useTranslation();
        return ( 
  <>
    <AuthSubTitle>
      {`${t('authScreen.otpFromEmail')} ${formik.values.email}`}
    </AuthSubTitle>
    <Box display="flex" justifyContent="center" gap={1.5} mb={4} mt={2.5}>
      {[...Array(6)].map((_, index) => {
        const name = `otp${index}` as keyof typeof formik.values;
        return (
          <StyledOtpInput
            key={index}
            name={name}
            value={formik.values[name]}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/, '');
              formik.setFieldValue(name, value as string);
              if (value && index < 5) {
                const nextInput = document.querySelector(`input[name=otp${index + 1}]`);
                if (nextInput instanceof HTMLInputElement) nextInput.focus();
              }
            }}
            inputProps={{
              maxLength: 1,
            }}
            error={Boolean(formik.errors[name] && formik.touched[name])}
            helperText={formik.touched[name] && formik.errors[name]}
          />
        );
      })}
    </Box>
    <AuthBoxText>
      <AuthButton
        variant="contained"
        type="submit"
        disabled={[...Array(6)].some((_, i) => !formik.values[`otp${i}`])}
      >
        {t('authScreen.submitOTPButton')}
      </AuthButton>
    </AuthBoxText>
  </>
  )
}

export default AuthOTP;
