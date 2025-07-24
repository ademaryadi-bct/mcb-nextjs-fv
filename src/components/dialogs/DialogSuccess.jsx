// components/dialogs/SuccessDialog.jsx
'use client'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

const SuccessDialog = ({ open, onClose, title = 'Success', message = 'User saved successfully!' }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus variant='contained'>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SuccessDialog
