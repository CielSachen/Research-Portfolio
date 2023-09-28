import { ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { colorConfigs } from '../../configs/colorConfigs';
import type { AppRoute } from '../../routes';

interface Props {
  item: AppRoute;
}

export function SidebarItem(props: Props) {
  const appState = useAppSelector((state) => state.appState.value);

  return (
    props.item.sidebarProps && props.item.path
      ? (
        <ListItemButton
          component={Link}
          to={props.item.path}
          sx={{
            '&: hover': { backgroundColor: colorConfigs.sidebar.hoverBg },
            backgroundColor: appState === props.item.state
              ? colorConfigs.sidebar.activeBg
              : 'unset',
            paddingX: '24px',
            paddingY: '12px',
          }}
        >
          <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>{props.item.sidebarProps.icon && props.item.sidebarProps.icon}</ListItemIcon>
          {props.item.sidebarProps.displayText}
        </ListItemButton>
      )
      : null
  );
}
