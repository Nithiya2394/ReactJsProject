import { useFormik } from 'formik';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ROUTES } from '@/constants/routes';
// import { Authlogin } from '@/repositories/AuthRepository';
 const getValidationSchema = (step: number) => {
      const otpSchemas = [0, 1, 2, 3, 4, 5].reduce((acc, i) => {
        acc[`otp${i}`] = Yup.string().when([], {
          is: () => step === 3,
          then: (schema) => schema.matches(/^\d$/, 'Invalid digit'),
        });
        return acc;
      }, {} as Record<string, Yup.StringSchema>);
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      return Yup.object().shape({
        username: step === 1 ? Yup.string().required('Username is required') : Yup.string(),
        password: step === 1
          ? Yup.string()
              .required('Password is required')
              .matches(strongPasswordRegex, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.')
          : Yup.string(),
        email:
          step === 2
            ? Yup.string().email('Invalid email').required('Email is required')
            : Yup.string(),
        ...otpSchemas,
        newPassword:
          step === 4
            ? Yup.string()
                .required('New password is required')
                .matches(
                  strongPasswordRegex,
                  'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.'
                )
            : Yup.string(),
        confirmPassword:
          step === 4
            ? Yup.string()
                .required('Confirm password is required')
                .oneOf([Yup.ref('newPassword')], 'Passwords must match')
            : Yup.string(),
      });
    };

const useAuthFormModal = () => {
    const router = useRouter();
    const [step, setStep] = useState<number>(1);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [passwordResetSuccess, setPasswordResetSuccess] = useState<boolean>(false);
    const handleTogglePassword = useCallback(() => setShowPassword((prev) => !prev), []);
    const handleForgotPassword = () => setStep(2);
     const formik = useFormik({
          initialValues: {
            username: '',
            password: '',
            email: '',
            otp0: '',
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
            newPassword: '',
            confirmPassword: '',
          },
          validationSchema: getValidationSchema(step),
          enableReinitialize: true,
          onSubmit: async (values) => {
            switch (step) {
              case 1:
                setLoading(true);
                setApiError('')
                // const getUserDetails = {
                //   email: values.username,
                //   password: values.password,
                // };
                try {
                  const response = await fetch('https://accesscashflow.ionixxtech.com/nurupi/admin-authenticate', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email: values.username,
                      password: values.password,
                      grantType: 'password',
                    }),
                  });      
                  // const response = await Authlogin(getUserDetails);    
                  const res = await response.json();          
                  if (!response.ok) {
                    setApiError(res?.message || 'Invalid credentials');
                    throw new Error(res?.message || 'Login failed');
                  }          
                  localStorage.setItem('token', res.data?.accessToken);
                  setApiError('');
                  router.push(ROUTES.DASHBOARD);
                } catch (error) {
                  if (error instanceof Error) {
                    console.error('Login error:', error.message);
                    setApiError(error.message);
                  } 
                }finally {
                  setLoading(false); // Stop loading
                }
                break;
              case 2:
                console.log('Sending forgot password email to', values.email);
                setStep(3);
                break;
              case 3: {
                const otp = [0, 1, 2, 3, 4, 5].map(i => values[`otp${i}` as keyof typeof values]).join('');
                console.log('Submitted OTP:', otp);
                setStep(4);
                break;
              }
              case 4:
                console.log('Resetting password to:', values.newPassword);
                setPasswordResetSuccess(true);
                break;
              default:
                break;
            }
          },
        });
    return useMemo(() => {
        return {
            formik, step,
            setStep,showPassword, apiError, setApiError, loading, setLoading, passwordResetSuccess, setPasswordResetSuccess
            , handleTogglePassword, handleForgotPassword
        };
    },[formik, step, showPassword, apiError, loading, passwordResetSuccess, handleTogglePassword]);
  }
  export default useAuthFormModal;