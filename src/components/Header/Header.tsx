'use client';
import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import useHeaderStyles from './useHeaderStyle';

interface HeaderProps {
  title: string;
  alignment?: 'center' | 'left';
}

const Header = ({ title, alignment = 'center' }: HeaderProps) => {
  const classes = useHeaderStyles();

  const headerStyles = useMemo(() => {
    return {
      ...classes.header,
      ...(alignment === 'center' ? classes.centerAlign : classes.leftAlign),
    };
  }, [classes, alignment]);

  return (
    <Box sx={headerStyles}>
      <Typography style={classes.headerText}>{title}</Typography>
      <Box sx={classes.headerUnderline} />
    </Box>
  );
};

export default Header;
