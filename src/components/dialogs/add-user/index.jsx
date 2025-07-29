'use client'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

const ConfirmDialog = ({ open, setOpen, title, description, onConfirm }) => {
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    if (!loading) setOpen(false)
  }

  const handleConfirm = async () => {
    try {
      setLoading(true)
      await onConfirm?.() // Wait for async actions like API/mutation
      setOpen(false) // Close dialog after success
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!open) setLoading(false)
  }, [open])

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title || 'Are you sure?'}</DialogTitle>
      <DialogContent>
        <Typography>{description || 'This action cannot be undone.'}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined' disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant='contained' disabled={loading}>
          {loading ? 'Processing...' : 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
