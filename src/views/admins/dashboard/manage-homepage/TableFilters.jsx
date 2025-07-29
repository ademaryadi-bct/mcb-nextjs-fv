// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TableFilters = ({ setData, tableData }) => {
  const theme = useTheme()
  // States
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')

  const statuses = ['Active', 'Inactive']

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      console.log(user.fullName.toLocaleLowerCase(), search.toLocaleLowerCase())
      if (status && user.status !== status.toLocaleLowerCase()) return false
      if (!user.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return false
      // if (globalFilter && user.globalFilter )

      return true
    })

    setData(filteredData || [])
  }, [search, status, tableData, setData])

  const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
    // States
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value)
      }, debounce)

      return () => clearTimeout(timeout)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return <CustomTextField fullWidth {...props} value={value} onChange={e => setValue(e.target.value)} />
  }

  const handleChange = event => {
    setStatus(event.target.value)
  }

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography>Search</Typography>
          <DebouncedInput
            value={search ?? ''}
            onChange={value => setSearch(String(value))}
            placeholder='Search'
            className='max-sm:is-full'
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <CustomTextField select fullWidth value={status} label='Status' onChange={handleChange}>
            <MenuItem value=''>Select Status</MenuItem>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
