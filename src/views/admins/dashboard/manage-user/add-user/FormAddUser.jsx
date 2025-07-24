'use client'

import { Box, Card, Typography, InputAdornment, IconButton, MenuItem, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import PersonIcon from '@mui/icons-material/PersonOutline'
import CustomTextField from '@core/components/mui/TextField'
import classnames from 'classnames'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import ConfirmDialog from '@/components/dialogs/add-user'
import { useRouter } from 'next/navigation'

const ProfileForm = () => {
  const theme = useTheme()
  const [form, setForm] = useState({
    email: '',
    name: '',
    role: '',
    status: '',
    password: '',
    showPassword: false
  })

  const roles = ['Admin', 'Editor', 'Viewer']
  const statuses = ['Active', 'Inactive']

  const handleChange = prop => event => {
    setForm({ ...form, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword })
  }

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
    <Card>
      {/* Header */}
      <Box sx={{ m: 3 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#8F85F3',
            p: 2,
            borderRadius: 1,
            mb: 2
          }}
        >
          <PersonIcon sx={{ mr: 1, color: '#FFFFFF' }} />
          <Typography variant='h6' color='#FFFFFF'>
            Profile
          </Typography>
        </Box>
      </Box>

      {/* Form Grid */}
      <Box sx={{ px: 3, pb: 3 }} component='form' noValidate autoComplete='off'>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              fullWidth
              label='E-mail'
              placeholder='Enter Email'
              value={form.email}
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              fullWidth
              label='Password'
              value={form.password}
              onChange={handleChange('password')}
              type={form.showPassword ? 'text' : 'password'}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <i className={classnames(form.showPassword ? 'tabler-eye' : 'tabler-eye-off')} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              fullWidth
              label='Name'
              placeholder='Enter Name'
              value={form.name}
              onChange={handleChange('name')}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              select
              fullWidth
              value={form.role}
              label='Role'
              slotProps={{
                select: {
                  onChange: handleChange('role'),
                  displayEmpty: true,
                  renderValue: selected =>
                    selected === '' ? <em style={{ color: theme.palette.text.disabled }}>Select Role</em> : selected
                }
              }}
            >
              <MenuItem disabled value=''>
                <em>Select Role</em>
              </MenuItem>
              {roles.map(role => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
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
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
          <OpenDialogOnElementClick
            element={Button}
            dialog={ConfirmDialog}
            elementProps={{
              variant: 'contained',
              children: 'Save'
            }}
            dialogProps={{
              title: 'Save User?',
              description: 'Are you sure you want to save this user?',
              onConfirm: handleSubmit
            }}
          />
          <Button variant='outlined' color='primary' onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default ProfileForm
