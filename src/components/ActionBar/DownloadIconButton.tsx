'use client';
import React from 'react';
import { Button, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type Props = {
  label: string;
  icon: StaticImageData | string; 
  onClick?: () => void;
};
const DownloadIconButton = ({ label, icon, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      startIcon={<Image src={icon} alt={label} width={16} height={16} />}
      sx={{ textTransform: 'none', fontWeight: 500 }}
    >
       <Typography variant="body2" sx={{ color: '#000' }}>
         {label}
       </Typography>
    </Button>
  );
};

export default DownloadIconButton;
