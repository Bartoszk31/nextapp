import React, { FunctionComponent, PropsWithChildren } from 'react'
import Head from 'next/head'
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  List,
  Container,
  Paper,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'

import AppBar from '@/components/AppBar'
import Drawer from '@/components/Drawer'
import NextLink from '@/components/NextLink'
import HomeIcon from '@mui/icons-material/Home'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

type Props = PropsWithChildren & {
  title: string
}

const MainLayout: FunctionComponent<Props> = ({ children, title }) => {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <NextLink href="/">Tiles</NextLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <NextLink href="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Tiles" />
              </ListItemButton>
            </NextLink>
            <NextLink href="/create-tile">
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Create Tile" />
              </ListItemButton>
            </NextLink>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 2 }}>
              {children}
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default MainLayout
