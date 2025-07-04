'use client';
import { Box, Button, Checkbox, FormControlLabel, Grid, styled, TextField, Typography } from '@mui/material';

export const CenteredGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),   
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(4),   
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export const AuthContainer = styled(Box)`
  width: 460px;
  height: 590px;
  max-width: 400px;
  background-color: #fff;
  border-radius: 24px; /* theme.spacing(3) = 24px */
  box-shadow: ${({ theme }) => theme.shadows[3]};
  padding: 36px 30px;
`;

export const StepSubtitle = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px; /* 1.25 * 8 = 10px */
  text-align: left;
`;

export const AuthSubTitle = styled(Typography)`
  margin-bottom: -6px;   
  font-weight: 500;
  font-size: 0.875rem;
`;
export const TypographySubText = styled(Typography)`
  font-weight: 500;
  font-size: 0.875rem;
`;
export const AuthBoxText = styled(Box)`
  margin: 100px 200px;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
export const AuthButton = styled(Button)`
  position: absolute;
  top: 85%;
  left: 67%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 25px;
  padding: 6px 36px;
  background: linear-gradient(45deg, #6ec5ff 30%, #2196f3 90%);
  text-transform: none;
  font-weight: 700;
  font-size: 0.875rem;
  color: #fff;
  line-height: 1.5;
  &.Mui-disabled {
    color: #fff;
    background: #1a8eb8;
    box-shadow: 6px 6px 10px 0px #167da333;
  }
`;
export const AuthApiError = styled(Typography)`
  margin-top: 16px;   
  font-weight: 500;
  font-size: 0.75rem;
`;
export const ForgotPasswordText = styled(Typography)`
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.75rem;
  font-weight: 500;
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  & .MuiFormControlLabel-label {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const StyledTextField = styled(TextField)`
  & input {
    padding: 12px 14px;
    font-size: 0.8125rem;
    font-weight: 500;
  }
`;

export const StyledOtpInput = styled(TextField)`
  width: 44px;
  height: 40px;

  & input {
    text-align: center;
    font-size: 1.5rem;
    padding: 0;
    border: 1px solid #CFD5E0;
    border-radius: 5px;
  }
`;

export const PasswordHintBox = styled(Box)`
  border: 1px solid #90CAF9;
  border-radius: 16px; 
  padding: 12px 16px;  
  margin-bottom: 24px;  
`;
export const PasswordHintText = styled(Typography)`
  font-size: 0.75rem;
  font-weight: 400;
`;
export const FormContainer = styled(Box)`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FormWrapper = styled(Box)`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const CardWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.grey[100]}`,
    boxShadow: `10px 10px 15px 0px ${theme.palette.grey[400]}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px', 
    borderRadius: '15px',
    zIndex: 2,
    position: 'absolute', 
    top: '40%',
    width: '90%',  
    [theme.breakpoints.up('md')]: {
      padding: '40px 50px',
      position: 'static',
      top: 'unset',
      width: 'unset',
    },
  }));
  export const SubTitle = styled(Box)(({ theme }) => ({
    fontSize: '1rem',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.grey[300],
    fontWeight: 600,
    marginBottom: '20px',  
    [theme.breakpoints.up('md')]: {
      width: '360px',
    },
  }));






export const CheckBoxStyle = styled(Checkbox)`
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TypographyText = styled(Typography)`
  font-weight: 600;
  font-size: 0.875rem;
`;
export const EarnSteadyText = styled(Typography)`
  font-weight: 500;
  font-size: 0.8125rem;
  margin-bottom: 5px;
`;
export const ProjectReturnText = styled(Typography)`
  font-weight: 400;
  font-size: 0.8125rem;
`;
export const ProjectReturnMonth = styled(Typography)`
  font-weight: 400;
  font-size: 0.6875rem;
`;
export const ProjectReturnValue = styled(Typography)`
  font-weight: 600;
  font-size: 0.6875rem;
`;
