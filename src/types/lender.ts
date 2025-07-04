
export type Lender = {
    lenderId: string;
    dateOfOnboarding: number;
    name: string;
    mobileNumber: number;
    status: string;
    statusKey: string;
    investedAmount: number;
  };
  
  // export type TableColumn<T> = {
  //   key: keyof T | 'action';
  //   label: string;
  //   align?: 'left' | 'right' | 'center';
  //   render?: (value: T[keyof T], row: T) => React.ReactNode;
  //   renderHeader?: (isSorted: boolean, direction: 'asc' | 'desc') => React.ReactNode;
  // };
  export type TableColumn<T, K extends keyof T | string = keyof T | string> = {
    key: K;
    label: string;
    render?: (value: K extends keyof T ? T[K] : unknown, row: T) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
  };
  
  export type LenderStatCard = {
    activeUsers: string;
    inactiveUsers: string | number;
    kycPendingUsers: string | number;
    kycVerifiedUsers: string | number;
    totalEscrowAmount: string | number;
    totalFundDisbursed: string | number;
    totalInvestedAmount: string | number;
    totalInvestors: string | number;
    totalNewUsers: string | number;
};