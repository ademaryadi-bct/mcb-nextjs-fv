'use client'

import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar
} from '@mui/material'
import {
  DashboardOutlined,
  PeopleOutline,
  BusinessOutlined,
  EventOutlined,
  MuseumOutlined,
  NewspaperOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  SlideshowOutlined,
  PanoramaOutlined,
  ExpandMoreOutlined,
  ExpandLessOutlined
} from '@mui/icons-material'

const drawerWidth = 240

const menuItems = [
  { text: 'Dashboards', icon: <DashboardOutlined />, href: '/dashboard' },
  { text: 'Kelola User', icon: <PeopleOutline />, href: '/admins/dashboard' },
  {
    text: 'Kelola Beranda',
    icon: <DashboardOutlined />,
    children: [
      { text: 'Slide Show', icon: <SlideshowOutlined />, href: '/admins/homepage/manage-slide-show' },
      { text: 'Overview', icon: <PanoramaOutlined />, href: '/beranda/overview' },
      { text: 'Galery', icon: <PanoramaOutlined />, href: '/beranda/galery' }
    ]
  },
  { text: 'Kelola Data Perusahaan', icon: <BusinessOutlined />, href: '/perusahaan' },
  { text: 'Kelola Event', icon: <EventOutlined />, href: '/event' },
  { text: 'Kelola Museum', icon: <MuseumOutlined />, href: '/museum' },
  { text: 'Kelola Berita', icon: <NewspaperOutlined />, href: '/berita' },
  { text: 'Kelola MCB Shop', icon: <ShoppingCartOutlined />, href: '/shop' }
]

export default function Layout({ children }) {
  const pathname = usePathname()
  const [openDrawer, setOpenDrawer] = useState(true)
  const [openMenus, setOpenMenus] = useState({})

  useEffect(() => {
    // Auto-expand parent menu if child is active
    const expandedMenus = {}
    menuItems.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          if (pathname === child.href) {
            expandedMenus[item.text] = true
          }
        })
      }
    })
    setOpenMenus(expandedMenus)
  }, [pathname])

  const toggleDrawer = () => {
    setOpenDrawer(prev => !prev)
  }

  const toggleMenu = key => {
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const isMenuOpen = key => !!openMenus[key]
  const collapsed = !openDrawer
  const paddingLeft = collapsed ? 2 : 7

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position='fixed' sx={{ zIndex: 1300, background: '#fff', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display='flex' alignItems='center'>
            <IconButton onClick={toggleDrawer} edge='start'>
              <MenuOutlined />
            </IconButton>
            <Typography variant='h6' noWrap>
              MCB
            </Typography>
          </Box>
          <Box display='flex' alignItems='center' gap={2}>
            <Box textAlign='right'>
              <Typography variant='body2'>Matilda Robertson</Typography>
              <Typography variant='caption' color='text.secondary'>
                Admin
              </Typography>
            </Box>
            <Avatar>MR</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='permanent'
        open={openDrawer}
        sx={{
          width: openDrawer ? drawerWidth : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: openDrawer ? drawerWidth : 60,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            overflowX: 'hidden'
          }
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => {
            if (!item.children) {
              return (
                <ListItemButton
                  key={item.text}
                  component={Link}
                  href={item.href}
                  sx={{
                    minHeight: 48,
                    justifyContent: openDrawer ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: pathname === item.href ? '#8A63D2' : 'transparent',
                    color: pathname === item.href ? '#fff' : 'inherit',
                    '&:hover': {
                      bgcolor: pathname === item.href ? '#8A63D2' : 'rgba(138, 99, 210, 0.1)'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openDrawer ? 3 : 'auto',
                      justifyContent: 'center',
                      color: pathname === item.href ? '#fff' : 'inherit'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: openDrawer ? 1 : 0 }} />
                </ListItemButton>
              )
            } else {
              return (
                <Box key={item.text}>
                  <ListItemButton
                    onClick={() => toggleMenu(item.text)}
                    sx={{
                      minHeight: 48,
                      justifyContent: openDrawer ? 'initial' : 'center',
                      px: 2.5
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: openDrawer ? 3 : 'auto',
                        justifyContent: 'center'
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: openDrawer ? 1 : 0 }} />
                    {isMenuOpen(item.text) ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
                  </ListItemButton>
                  <Collapse in={isMenuOpen(item.text)} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {item.children.map(sub => (
                        <ListItemButton
                          key={sub.text}
                          component={Link}
                          href={sub.href}
                          sx={{
                            minHeight: 40,
                            justifyContent: openDrawer ? 'initial' : 'center',
                            pl: openDrawer ? 7 : 2, // 👈 More padding when expanded
                            pr: 2.5,
                            bgcolor: pathname === sub.href ? '#8A63D2' : '',
                            color: pathname === sub.href ? '#fff' : '',
                            borderRadius: 1,
                            my: 0.5
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: openDrawer ? 3 : 'auto',
                              justifyContent: 'center',
                              color: pathname === sub.href ? '#fff' : ''
                            }}
                          >
                            {sub.icon}
                          </ListItemIcon>
                          <ListItemText primary={sub.text} sx={{ opacity: openDrawer ? 1 : 0 }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              )
            }
          })}
        </List>
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  )
}
