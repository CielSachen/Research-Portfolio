import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  Collapse,
  List, ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { useAppSelector } from '../../app/hooks';
import { colorConfigs } from '../../configs/colorConfigs';
import type { AppRoute } from '../../routes';
import { SidebarItem } from './SidebarItem';

interface Props {
  item: AppRoute;
  isOpen: boolean;
  toggleOpen(): void;
}

export function SidebarItemCollapse(props: Props) {
  const appState = useAppSelector((state) => state.appState.value);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (appState.includes(props.item.state)) setOpen(true);
  }, [appState, props.item]);

  return (
    props.item.sidebarProps
      ? (
        <>
          <ListItemButton
            onClick={() => {
              setOpen(!open);
            }}
            sx={{
              '&: hover': { backgroundColor: colorConfigs.sidebar.hoverBg },
              paddingX: '24px',
              paddingY: '12px',
            }}
          >
            <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>{props.item.sidebarProps.icon && props.item.sidebarProps.icon}</ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography>{props.item.sidebarProps.displayText}</Typography>}
            />
            {open
              ? <ExpandLessOutlinedIcon />
              : <ExpandMoreOutlinedIcon />}
          </ListItemButton>
          <Collapse
            in={open}
            timeout="auto"
          >
            <List>
              {props.item.children?.map((route, index) => (
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
          </Collapse>
        </>
      )
      : null
  );
}
