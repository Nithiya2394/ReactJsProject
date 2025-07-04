'use client';
import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';
import { SearchImages } from '@/assets/images/search';
type Props = {
  placeholder?: string;
  onChange?: (value: string) => void;
};
const SearchInputIcon = ({ placeholder = 'Search', onChange }: Props) => (
  <TextField
    size="small"
    placeholder={placeholder}
    onChange={(e) => onChange?.(e.target.value)}
    sx={{ minWidth: 200 }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Image src={SearchImages.SearchIcon} alt="search" width={16} height={16} />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchInputIcon;
