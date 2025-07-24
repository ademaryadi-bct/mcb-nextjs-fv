'use client'

import Grid from '@mui/material/Grid2'
import { Box, TextField, Typography, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material'
import CustomTextField from '@core/components/mui/TextField'
import FileUploaderMultiple from '@/components/upload/MultipleUpload'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import ConfirmDialog from '@/components/dialogs/add-user'

export default function SlideShowForm() {
  const [form, setForm] = useState({
    showName: '',
    showDescription: '',
    status: '',
    files: []
  })

  const statuses = ['Active', 'Inactive']
  const handleChange = prop => event => {
    setForm({ ...form, [prop]: event.target.value })
  }

  const setFiles = val => {
    setForm(prev => ({
      ...prev,
      files: val
    }))
  }

  useEffect(() => {
    console.log(form.files)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form])

  const theme = useTheme()

  const handleSubmit = async () => {
    console.log('Saving user...')
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate delay
    console.log('User saved!')
  }

  const router = useRouter()
  const handleCancel = () => {
    router.push('/admins/dashboard')
  }

  return (
    <Box sx={{ p: 4, pt: 10 }}>
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        Add New Slide Show
      </Typography>

      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          p: 3,
          boxShadow: 1,
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* Form Content */}
        <Grid container spacing={4} sx={{ flex: 1, display: 'flex' }}>
          {/* Left Side (40%) */}
          <Grid
            xs={12}
            md={5} // Changed from md={11} to md={5} (5/12 ≈ 40%)
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flex: 1
            }}
          >
            {/* Form Fields (Slide Show Name, Description, Status) */}
            <Box sx={{ mb: 8 }}>
              <CustomTextField
                fullWidth
                label='Slide Show Name'
                placeholder='Enter Slide Show Name'
                value={form.showName} // Fixed: Changed from form.email to form.showName
                onChange={handleChange('showName')}
                multiline
                rows={4}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <CustomTextField
                fullWidth
                label='Slide Show Description'
                placeholder='Enter Description'
                value={form.showDescription} // Fixed: Changed from form.email to form.showDescription
                onChange={handleChange('showDescription')}
                multiline
                rows={4}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <CustomTextField
                select
                fullWidth
                value={form.status}
                label='Status'
                onChange={handleChange('status')}
                slotProps={{
                  select: {
                    displayEmpty: true,
                    renderValue: selected =>
                      selected === '' ? <em style={{ color: theme.palette.text.disabled }}>Select Status</em> : selected
                  }
                }}
              >
                <MenuItem disabled value=''>
                  <em>Select Status</em>
                </MenuItem>
                {statuses.map(status => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </CustomTextField>
            </Box>
          </Grid>

          {/* Right Side (60%) */}
          <Grid
            xs={12}
            md={7} // Changed from md={1} to md={7} (7/12 ≈ 60%)
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flex: 1,
              pl: 4 // Add padding to separate from left side
            }}
          >
            <FileUploaderMultiple onFilesChange={file => setFiles(file)} />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box display='flex' justifyContent='flex-end' gap={2} mt={4}>
          <Box>
            <OpenDialogOnElementClick
              sx={{ color: '#7c3aed', borderColor: '#7c3aed', borderRadius: 2 }}
              element={Button}
              dialog={ConfirmDialog}
              elementProps={{
                variant: 'contained',
                children: 'Save'
              }}
              dialogProps={{
                title: 'Save Slide Show?',
                description: 'Are you sure you want to save this Slide Show?',
                onConfirm: handleSubmit
              }}
            />
          </Box>
          <Button
            variant='outlined'
            sx={{ color: '#7c3aed', borderColor: '#7c3aed', borderRadius: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
