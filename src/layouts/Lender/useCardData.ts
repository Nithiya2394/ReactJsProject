import { LenderImages } from '@/assets/images/lender';
import { CardDetail } from '@/components/DashboardCard/DashboardStatCard';
import { useMemo } from 'react';

const useCardData = () => {
  const cardData: CardDetail[] = useMemo(() => {
       return [
      {
        title: 'New Users',
        total: '150',
        details: [
          { label: 'KYC completed', value: '100' },
        ],
        kycdetails: [
          { label: 'KYC Pending', value: '50' },
        ],
        bgColor: '#007EA7',
        icon: LenderImages.Users,
      },
      {
        title: 'Total Investors',
        total: '220',
        details: [
          { label: 'Active Users', value: '115' },
        ],
        kycdetails: [
          { label: 'KYC Pending', value: '50' },
        ],
        bgColor: '#005F73',
        icon: LenderImages.Investors,
      },
      {
        title: 'Total Amt Invst ',
        total: '₹25Cr',
        details: [
          { label: 'Fund Disbursed', value: '₹23Cr' },
        ],
        kycdetails: [
          { label: 'KYC Pending', value: '50' },
        ],
        bgColor: '#A7C957',
        icon: LenderImages.InvestAmount,
        // icon : mapIcon(item.iconKey),
      },
    ];
  }, []);
  return cardData;
};

// const mapIcon = (key: string): string => {
//   switch (key) {
//     case 'users': return LenderImages.Users;
//     case 'investors': return LenderImages.Investors;
//     case 'amount': return LenderImages.InvestAmount;
//     default: return '';
//   }
// };

export default useCardData;
