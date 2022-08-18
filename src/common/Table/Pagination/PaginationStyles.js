import { styled as muiStyled } from '@mui/material/styles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';

export const PageSizeStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
  border-radius: 38px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 20px;
  width: 300px;
`;

export const PageNumberStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
  border-radius: 38px;
  height: 48px;
  display: flex;
  align-items: center;

  .MuiPaginationItem-previousNext {
    background: ${({ theme }) => theme.palette.action.selected};
  }
`;

export const MuiToggleButtonGroup = muiStyled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    fontSize: 12,
    height: 48,
    '&.Mui-disabled': {
      border: 0,
    },
  },

  '& .Mui-selected': {
    backgroundColor: theme.palette.action.selected,
    border: 0,
  },
}));

export const MuiToggleButton = muiStyled(ToggleButton)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  borderRadius: '0px !important',
  padding: 15,
}));
