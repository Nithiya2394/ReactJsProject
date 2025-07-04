import { DialogModal } from '../../components/Dialog';
import { useTranslation } from 'react-i18next';
import { AuthBoxText, AuthButton, PasswordHintBox, PasswordHintText, StyledTextField, TypographySubText } from './AuthComponents';


type AuthResetPasswordProps = {
  formik: {
    values: { newPassword: string; confirmPassword: string };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    touched: { newPassword?: boolean; confirmPassword?: boolean };
    errors: { newPassword?: string; confirmPassword?: string };
    isValid: boolean;
    resetForm: () => void;
  };
  passwordResetSuccess: boolean;
  setPasswordResetSuccess: (value: boolean) => void;
  setStep: (step: number) => void;
  setApiError: (error: string) => void;
}

const AuthResetPassword = ({ formik, passwordResetSuccess, setPasswordResetSuccess, setStep, setApiError }: AuthResetPasswordProps) => {
    const { t } = useTranslation();
    return (
  <>
    <TypographySubText>
      {t('authScreen.newpassword')}
    </TypographySubText>
        <StyledTextField
            fullWidth
            name="newPassword"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            />
    <PasswordHintBox>
      <PasswordHintText variant="body2" color="textSecondary">
        {t('authScreen.passwordRules.minLength')}<br />
        {t('authScreen.passwordRules.uppercase')}<br />
        {t('authScreen.passwordRules.lowercase')}<br />
        {t('authScreen.passwordRules.number')}<br />
        {t('authScreen.passwordRules.specialChar')}
      </PasswordHintText>
    </PasswordHintBox>

    <TypographySubText>
      {t('authScreen.confirmPassword')}
    </TypographySubText>
    <StyledTextField
      fullWidth
      name="confirmPassword"
      type="password"
      value={formik.values.confirmPassword}
      onChange={formik.handleChange}
      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />

    <AuthBoxText>
      <AuthButton
        variant="contained"
        type="submit"
        disabled={!formik.isValid || !formik.values.newPassword || !formik.values.confirmPassword}
       >
        {t('authScreen.submitOTPButton')}
      </AuthButton>
    </AuthBoxText>

    <DialogModal
      open={passwordResetSuccess}
      onClose={() => setPasswordResetSuccess(false)}
      onConfirm={() => {
        setPasswordResetSuccess(false);
        formik.resetForm();
        setStep(1);
        setApiError('');
      }}
      title={t('authScreen.PasswordChangedSuccessfull')}
      confirmText="Ok"
    />
  </>
)
};
export default AuthResetPassword;
