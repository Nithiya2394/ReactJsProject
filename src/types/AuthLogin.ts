export type AuthResponse = {
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      status: string;
      appLanguage: string;
      customerServiceLanguage: string;
      appLanguageCode: string;
      customerLanguageCode: string;
      mobileNumber: string;
      hasMpin: boolean;
    };
  };
  export type AuthRequest = {
    amount: number;
    consentForEscrow: boolean;
    loanProductIdentifier: string;
    tenure: number;
  };