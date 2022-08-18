import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

export const StyledHeader = styled.div`
  height: 92px;
  display: flex;
  align-items: center;
  .appbar {
    height: 100%;
  }
  .logo {
    display: flex;
    margin: 5px 0px;
    font-family: monospace;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    height: 45px;
    margin-right: 10px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '16px 20px',
    gap: 15,
    background: '#F3F3F5',
    borderRadius: 8,
    width: 510,
    height: '52px !import',
  },
}));

export const headerSx = {
  userIcon: {
    marginLeft: '10px',
    marginRight: '26px',
    background: '#ADB4C2',
    width: '52px',
    color: 'white',
    height: '52px',
    '&:hover': {
      backgroundColor: '#858993 !important',
    },
  },
  logOut: {
    background: '#ADB4C2',
    width: '52px',
    height: '52px',
    '&:hover': {
      backgroundColor: '#858993 !important',
    },
  },
  searchField:{
    height: '52px !import',
    border: 'none',
    margin: 0,
    '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': { border: 'none' }
  }
};
