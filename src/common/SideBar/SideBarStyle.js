import styled from 'styled-components';
import { makeStyles, withStyles } from '@mui/styles';
import { ListItem as MuiListItem } from '@mui/material';

export const useStyles = makeStyles({
  button: {
    borderRadius: `4px !important`,
    height: 48,
    '&:hover': {
      backgroundColor: '#82868C !important',
    },
  },
});

export const StyledSideBar = styled.div`
  width: 270px;
  top: 0;
  left: 0;
  max-width: 270px;
  z-index: 1;
  background: white;
  padding: 10px;
  height: 100%;
  .sidebar {
    margin-top: 24px;

    span {
      font-size: 13px;
    }
  }
`;

export const ListItem = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignTtems: 'center',
    padding: '15px 0px 15px 20px',
    gap: 20,
    height: 54,
    background: '#E3E6EB',
    borderRadius: 10,
    '&$selected': {
      backgroundColor: '#F9F9F9 !important',
      borderRadius: 10,
    },
    '&:hover': {
      borderRadius: 10,
      backgroundColor: '#E3E6EB !important',
    },
    marginTop: '5px !important',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '13px !important',
    lineHeight: 18,
    textTransform: 'uppercase',
    color: '#2a2e37',
  },
  selected: {},
}))(MuiListItem);
