import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthBoxText, AuthButton, AuthSubTitle, StyledTextField } from './AuthComponents';


type AuthEmailProps = {
    formik: {
        values: { username: string; password: string; email: string };
        errors: { username?: string; password?: string; email?: string };
        touched: { username?: boolean; password?: boolean; email?: boolean };
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
        isValid: boolean;
        dirty: boolean;
      };
}
const AuthEmail = ({ formik }: AuthEmailProps) => {
    const { t } = useTranslation();
    return ( 
  <>
    <AuthSubTitle>
      {t('authScreen.EmailId')}
    </AuthSubTitle>
      <StyledTextField
        fullWidth
        placeholder="Enter"
        name="email"
        margin="normal"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
    <AuthBoxText>
      <AuthButton
        variant="contained"
        type="submit"
        disabled={!formik.isValid || !formik.values.email}
      >
        {t('authScreen.nextButton')}
      </AuthButton>
    </AuthBoxText>
  </>
    );
};

export default AuthEmail;
