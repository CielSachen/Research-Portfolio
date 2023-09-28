import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { colorConfigs } from '../../configs/colorConfigs';
import { Sidebar } from '../navbar/Sidebar';
import { Topbar } from '../navbar/Topbar';

export function MainLayout() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ScrollRestoration />
      <Box sx={{ display: 'flex' }}>
        <div onClick={open
          ? () => {
            toggleOpen();
          }
          : undefined}>
          <Topbar toggleOpen={() => {
            toggleOpen();
          }} />
        </div>
        <Box
          component="nav"
          sx={{
            flexShrink: 0,
            width: '0px',
          }}
        >
          <Sidebar
            isOpen={open}
            toggleOpen={toggleOpen}
          />
        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: colorConfigs.mainBg,
            flexGrow: 1,
            minHeight: '100vh',
            padding: 3,
            width: '100%',
          }}
          onClick={open
            ? () => setOpen(!open)
            : undefined}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
