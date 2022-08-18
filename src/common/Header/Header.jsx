import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { headerSx, StyledHeader, useStyles } from './HeaderStyle';
import useSimpleModal from '../_hooks/useSimpleModal';
import LogOutDialog from './Dialog/LogOutDialog';
import { TextField } from '@mui/material';
import SearchIcon from '../../media/Icons/SearchIcon';
import LogOutIcon from '../../media/Icons/LogOutIcon';

export default function Header() {
  const logOutDialog = useSimpleModal();
  const classes = useStyles();
  return (
    <StyledHeader>
      <AppBar color={'transparent'} position="static" elevation={0}>
        <div style={{ paddingRight: '51px', paddingLeft: 30, margin: 0 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth={false}
                className={classes.search}
                variant="outlined"
                style={{ border: 'none', height: 52 }}
                inputProps={{ style: { width: 500, padding: '14.5px 10px' } }}
                InputProps={{
                  startAdornment: <SearchIcon style={{ marginRight: 15 }} />,
                }}
                sx={headerSx.searchField}
                placeholder={'Найти коносамент, груз, заказ и др.'}
              />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <span className="mr2">Менеджер</span>
              <IconButton sx={headerSx.userIcon} children={'ИИ'} />
              <Tooltip title="Выйти из системы!">
                <IconButton onClick={() => logOutDialog.open(1)} sx={headerSx.logOut}>
                  <LogOutIcon sx={{ color: 'white' }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </div>
      </AppBar>
      {logOutDialog.isOpen && <LogOutDialog {...logOutDialog} />}
    </StyledHeader>
  );
}
