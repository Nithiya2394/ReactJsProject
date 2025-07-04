// components/ui/IconOnlyButton.tsx
'use client';
import React from 'react';
import { Button, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type Props = {
  icon: StaticImageData | string; 
  alt: string;
  label: string;
  onClick?: () => void;
};
const FilterIconButton = ({ icon, alt, label,  onClick }: Props) => {
  return (
    <Button
    onClick={onClick}
    startIcon={
      <Image src={icon} alt={alt} width={20} height={20} />
    }
    variant="outlined"
    sx={{borderRadius: '6px', textTransform: 'none', fontWeight: 500, padding: '6px 12px' }} >
     <Typography variant="body2" sx={{ color: '#000' }}>
      {label}
    </Typography>
  </Button>
  );
};

export default FilterIconButton;
