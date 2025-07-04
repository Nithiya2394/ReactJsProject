type ConfigurationType = {
    BASE_URL: string;
    PAYMENT_MODE: string;
    CONFIG_FEE_PERCENT: string;
  };
  
  export const Configuration = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    PAYMENT_MODE: process.env.NEXT_PUBLIC_PAYMENT_MODE || 'sandbox',
    CONFIG_FEE_PERCENT:
      process.env.NEXT_PUBLIC_CONFIG_FEE_IN_PERCENT || 'platform_fee_in_percent',
  } as ConfigurationType;
  