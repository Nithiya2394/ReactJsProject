
import { 
  Box,
  Divider,
  styled,
} from '@mui/material';

export const LenderCardHorizontal = styled(Divider)`
  border-top: 1px dotted #116b8c;
  width: 380px;
  opacity: 0.4;
  display: inline-block;
`;

export const LenderCardVertical = styled(Divider)`
  border-bottom: 1px dotted #116b8c;
  height: 50px;
  opacity: 0.4;
  display: inline-block;
`;

export const DetailBox = styled(Box)`
  display: inline-block;
  vertical-align: top;
  width: 30%;
  margin-right: 2%;
`;

export const VerticalLineWrapper = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  width: 5%;
  text-align: center;
`;

export const KYCDetailBox = styled(Box)`
  display: inline-block;
  vertical-align: top;
  width: 30%;
  margin-left: 2%;
`;