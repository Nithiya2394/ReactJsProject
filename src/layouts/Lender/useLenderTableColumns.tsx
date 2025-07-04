import React from 'react';
import { useMemo, useCallback } from 'react';
import { TableColumn, Lender } from '@/types/lender';
import { formatDate, formatMobileNumber } from '@/utils/lender';
import { IconButton } from '@mui/material';
import { LenderImages } from '@/assets/images/lender';
import Image from 'next/image';

 const useLenderTableColumns = (): TableColumn<Lender>[] => {
  const handleViewClick = useCallback((row: Lender) => {
    console.log(row);
  }, []);

  const lenderColumns: TableColumn<Lender>[] = useMemo(
    () => [
      {
        key: 'lenderId',
        label: 'Lender ID',
        sortable: true,
        render: (value) => (
          <a href="#" style={{ color: '#1A8EB8', textDecoration: 'underline', fontWeight: 500 }}>
            {value as string}
          </a>
        ),
      },
      {
        key: 'dateOfOnboarding',
        label: 'Date of onboarding',
        sortable: true,
        render: (value) => formatDate(value as string),
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'mobileNumber',
        label: 'Mobile Number',
        render: (value) => formatMobileNumber(value as string),
      },
      {
        key: 'status',
        label: 'Status',
        render: (value) => {
          const status = (value as string).toLowerCase();
          const keywords = ['Completed', 'Pending'];
          const found = keywords
            .slice()
            .reverse()
            .find((word) => status.includes(word.toLowerCase()));
          return found || '';
        },
      },
      {
        key: 'statusKey',
        label: 'Remarks',
      },
      {
        key: 'investedAmount',
        label: 'Invested Amount',
        render: (value) =>
          `₹${Number(value).toLocaleString('en-IN')}`,
      },
      {
        key: 'action',
        label: 'Action',
        render: (_value, row) => (
          <IconButton
            onClick={() => handleViewClick(row)}
            sx={{
              width: 32,
              height: 32,
              backgroundColor: '#00274D',
              borderRadius: '50%',
              p: 0.75,
              '&:hover': { backgroundColor: '#001F3F' },
            }}
          >
            <Image
              src={LenderImages.NotesIcon}
              alt="notes"
              width={16}
              height={16}
            />
          </IconButton>
        ),
      },
    ],
    [handleViewClick]
  );
   return lenderColumns;
};
export default useLenderTableColumns;