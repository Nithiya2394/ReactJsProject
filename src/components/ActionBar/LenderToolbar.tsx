// components/LenderToolbar.tsx
'use client';
import React from 'react';
import { Box, Stack } from '@mui/material';

import SearchInputIcon from './SearchInputIcon';
import DownloadIconButton from './DownloadIconButton';
import { SearchImages } from '@/assets/images/search';
import FilterIconButton from './FilterIconButton';
import useSearchAction from './useSearchAction';

const LenderToolbar = () => {
    const { handleSearchChange, handleDownload, handleLog,handleFilter,} = useSearchAction();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} px={2}>
      <SearchInputIcon onChange={handleSearchChange} />
      <Stack direction="row" spacing={1}>
        <DownloadIconButton label="Download Report" icon={SearchImages.DowloadIcon} onClick={handleDownload} />
        <DownloadIconButton label="Activity Log" icon={SearchImages.ActivityLogIcon} onClick={handleLog} />
        <FilterIconButton label="Filter" icon={SearchImages.FilterIcon} alt="Filter" onClick={handleFilter}/>      
       </Stack>
    </Box>
  );
};

export default LenderToolbar;
