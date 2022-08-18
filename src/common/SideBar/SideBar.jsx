import React from 'react';
import { ListItem, StyledSideBar, useStyles } from './SideBarStyle';
import { useTranslation } from 'react-i18next';
import './SideBarTranslate';
import { NavLink, useLocation } from 'react-router-dom';
import { Button,  List, ListItemText } from '@mui/material';
import { sideBarItems } from './SideBarItems';
import ListItemIcon from '@mui/material/ListItemIcon';
import sideBarDivider from '../../media/sideBarDivider.svg';
import AddIcon from '../../media/Icons/AddIcon';

export default function SideBar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const classes = useStyles();
  return (
    <StyledSideBar>
      <div className="flex justify-center my3">
        <span style={{ fontSize: '30px', lineHeight: '41px', fontWeight: 700 }} children={'LOGO'} />
      </div>
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Button className={classes.button} fullWidth variant="contained">
          <AddIcon />
        </Button>
      </div>

      <div className="sidebar">
        <div className="sticky">
          <List>
            {sideBarItems.map((subMenu, index) => {
              return (
                <>
                  {index !== 0 && <img src={sideBarDivider} alt="" />}
                  {subMenu.map((item, index) => (
                    <ListItem
                      key={item.path}
                      button
                      selected={pathname === item.to}
                      to={item.to}
                      component={NavLink}
                    >
                      <ListItemIcon
                        children={item.icon}
                        style={{
                          minWidth: 24,
                        }}
                      />
                      <ListItemText children={t(item.text)} sx={{ fontSize: '13px !important' }} />
                    </ListItem>
                  ))}
                </>
              );
            })}
          </List>
        </div>
      </div>
    </StyledSideBar>
  );
}
