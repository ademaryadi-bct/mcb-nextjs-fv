'use client'

/*disable eslint */
// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

const FileUploaderMultiple = ({ onFilesChange }) => {
  // States
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (onFilesChange) onFilesChange(files)
  }, [files])

  // Hooks

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file))])
    },
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024 // 5MB
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return (
        <img
          width={80}
          height={80}
          alt={file.name}
          src={URL.createObjectURL(file)}
          style={{ objectFit: 'cover', borderRadius: 4 }}
        />
      )
    }

    return <renderFilePreview color='action' style={{ fontSize: 40 }} />
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)

    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    <ListItem key={file.name} sx={{ width: 'auto', padding: 0 }}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <i className='tabler-x text-xl' />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Upload Photo Slide Show
      </Typography>

      <Box
        sx={{
          border: '2px dashed #a78bfa',
          borderRadius: 2,
          height: '100%',
          minHeight: 260,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#8b5cf6',
          mb: 10
        }}
      >
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='flex items-center flex-col'>
            <Avatar variant='rounded' className='bs-12 is-12 mbe-9'>
              <i className='tabler-upload' />
            </Avatar>
            <Typography variant='h4' className='mbe-2.5'>
              Drop files here or click to upload.
            </Typography>
            {/* <Typography>
              Drop files here or click{' '}
              <a href='/' onClick={e => e.preventDefault()} className='text-textPrimary no-underline'>
                browse
              </a>{' '}
              thorough your machine
            </Typography> */}
          </div>
        </div>
      </Box>

      {files.length ? (
        <>
          <div className='display-flex'>
            <List
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap', // optional: wraps to next line if too long
                gap: 2 // spacing between items
              }}
            >
              {fileList}
            </List>
          </div>
          <div className='buttons'>
            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
          </div>
        </>
      ) : null}
    </>
  )
}

export default FileUploaderMultiple
