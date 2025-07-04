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
        render: (value: unknown) => (
          <a
            href="#"
            style={{ color: '#1A8EB8', textDecoration: 'underline', fontWeight: 500 }}
          >
            {String(value)}
          </a>
        ),
      },
      {
        key: 'dateOfOnboarding',
        label: 'Date of onboarding',
        sortable: true,
        render: (value: unknown) => formatDate(String(value)),
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'mobileNumber',
        label: 'Mobile Number',
        render: (value: unknown) => formatMobileNumber(String(value)),
      },
      {
        key: 'status',
        label: 'Status',
        render: (value: unknown) => {
          const status = String(value).toLowerCase();
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
        render: (value: unknown) =>
          `₹${Number(value).toLocaleString('en-IN')}`,
      },
      {
        key: 'action',
        label: 'Action',
        render: (_value: unknown, row: Lender) => (
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