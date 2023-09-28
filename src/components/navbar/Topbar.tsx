import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { colorConfigs } from '../../configs/colorConfigs';
import { sizeConfigs } from '../../configs/sizeConfigs';

interface Props {
  toggleOpen(): void;
}

export function Topbar(props: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: colorConfigs.topbar.bg,
        boxShadow: 'unset',
        color: colorConfigs.topbar.color,
        ml: sizeConfigs.sidebar.width,
        transition: 'width 1s',
        width: '100%',
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 2 }}
          onClick={() => props.toggleOpen()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <strong>R E S E A R C H &nbsp;&nbsp; P O R T F O L I O</strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
