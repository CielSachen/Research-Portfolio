import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

import { assets } from '../../assets';
import { colorConfigs } from '../../configs/colorConfigs';
import { sizeConfigs } from '../../configs/sizeConfigs';
import { appRoutes } from '../../routes';
import { SidebarItem } from './SidebarItem';
import { SidebarItemCollapse } from './SidebarItemCollapse';

interface Props {
  isOpen: boolean;
  toggleOpen(): void;
}

export function Sidebar(props: Props) {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: matches
          ? '100%'
          : sizeConfigs.sidebar.width,
        left: props.isOpen
          ? '0px'
          : `-${matches
            ? '100%'
            : sizeConfigs.sidebar.width}`,
        transition: 'left 1s',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: matches
            ? '100%'
            : sizeConfigs.sidebar.width,
          left: props.isOpen
            ? '0px'
            : `-${matches
              ? '100%'
              : sizeConfigs.sidebar.width}`,
          transition: 'left 1s',
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack
            sx={{ width: '100%' }}
            direction="row"
            justifyContent="center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close"
              sx={{
                marginRight: 2,
                position: 'absolute',
                left: '27.5px',
                top: '8px',
              }}
              onClick={() => props.toggleOpen()}
            >
              <CloseIcon />
            </IconButton>
            <Avatar src={assets.images.dlszSeal} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps
            ? route.children
              ? (
                <SidebarItemCollapse
                  item={route}
                  isOpen={props.isOpen}
                  toggleOpen={props.toggleOpen}
                  key={index}
                />
              )
              : (
                <div onClick={() => {
                  props.toggleOpen();
                }}>
                  <SidebarItem
                    item={route}
                    key={index}
                  />
                </div>
              )
            : null
        ))}
      </List>
    </Drawer>
  );
}
