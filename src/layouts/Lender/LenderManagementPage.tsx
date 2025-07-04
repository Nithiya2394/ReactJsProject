import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DashboardStatCard from '@/components/DashboardCard/DashboardStatCard';
import useLenderStats from './useLenderStats';
import useLenderTableColumns from './useLenderTableColumns';
import LenderToolbar from '@/components/ActionBar/LenderToolbar';
import TableComponent from '@/components/TableComponts/TableComponent';
import useCardData from './useCardData';

const LenderManagementPage = () => {
  const { lenders } = useLenderStats();
  const columns = useLenderTableColumns();
  const cardData = useCardData();
  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>Lender Management</Typography>
      <Grid container spacing={2} mt={2}>
      {cardData.map((card, idx) => (
        <Grid size={{ xs: 12, sm: 6, md:3 }} key={idx} >
          <DashboardStatCard {...card} />
        </Grid>
      ))}
    </Grid>
       <LenderToolbar />  
      <Box mt={5}>
      <TableComponent columns={columns} data={lenders} />   
      </Box>
    </Box>   
  );
};

export default LenderManagementPage;
