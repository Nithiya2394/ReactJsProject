import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { DetailBox, KYCDetailBox, LenderCardHorizontal, LenderCardVertical, VerticalLineWrapper } from './DashboardCardComponents';

export type CardDetail = {
    title: string;
    total: number | string;
    period?: string;
    details?: { label: string; value: number | string }[];
    kycdetails?: { label: string; value: number | string }[];
    bgColor?: string;
    icon?: string | { src: string; width?: number; height?: number };
};

const DashboardStatCard = ({ title, total, details, bgColor, icon, kycdetails }: CardDetail) => {
    const iconSrc = typeof icon === 'string' ? icon : icon?.src;
    const iconWidth = typeof icon === 'string' ? 32 : icon?.width || 32;
    const iconHeight = typeof icon === 'string' ? 32 : icon?.height || 32;
    return (
        <Card sx={{ borderRadius: 2, bgcolor: bgColor || '#1976d2', color: 'white', height: '100%' }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              {iconSrc && (
                <Box component="img" src={iconSrc} alt="icon"  width={iconWidth}
                height={iconHeight} />              )}
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {title}
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={1}>
              {total}
            </Typography>
            </Box>           
            <LenderCardHorizontal orientation="horizontal" flexItem />
            <DetailBox >
                {details?.map((item, idx) => (
                    <Typography key={idx} variant="body2">
                    {item.label} <br />
                    <strong>{item.value}</strong>
                    </Typography>
                ))}
            </DetailBox>
            <VerticalLineWrapper>
              <LenderCardVertical orientation="vertical" flexItem />
            </VerticalLineWrapper>

            <KYCDetailBox>
                {kycdetails?.map((item, idx) => (
                    <Typography key={idx} variant="body2">
                    {item.label} <br />
                    <strong>{item.value}</strong>
                    </Typography>
                ))}
            </KYCDetailBox>

        </CardContent>
        </Card>
      );
    }

export default DashboardStatCard;