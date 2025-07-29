'use client'
// MUI Imports

import Grid from '@mui/material/Grid2'

// Component Imports
import ListSlideShowTable from './ListSlideShow'

const ListSlideShow = ({ userData }) => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <ListSlideShowTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default ListSlideShow
