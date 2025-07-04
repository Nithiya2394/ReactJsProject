// components/SuccessDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from '@mui/material';

type DialogProps =  {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    confirmText?: string; 
}

const DialogModal = ({
    open,
    onClose,
    onConfirm,
    title = 'Success',
    confirmText = 'OK',
}: DialogProps) => {
    const handleConfirm = () => {
        if (onConfirm) onConfirm(); 
        onClose();
      };
  return (
    <Dialog
    open={open}
    onClose={onClose}
    maxWidth="xs" 
    fullWidth 
    PaperProps={{
      sx: {
        borderRadius: 3,
        padding: 10,
      },
    }}
  >
    <DialogContent>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 600, fontSize: '1rem' }}
      >
        {title}
      </Typography>
    </DialogContent>

    <DialogActions sx={{ justifyContent: 'center' }}>
      <Button
        onClick={handleConfirm}
        variant="contained"
        sx={{
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: '600',
          padding: '6px 20px',
          minWidth: 100,
        }}
      >
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
);
};
export default DialogModal;
