import { styled as muiStyled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

export const MuiCheckbox = muiStyled(Checkbox)(({ theme }) => ({
  svg: {
    fontSize: 16,
    stroke: '#ACACAC',
  },
}));
