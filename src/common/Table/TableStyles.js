import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export const useStyles = makeStyles({
  bodyText: {
    fontSize: '13px !important',
    lineHeight: '18px !important',
    color: '#000000',
  },
  headerText: {
    fontSize: '13px !important',
    lineHeight: '18px !important',
  },
  cell: {
    height: 68,
  },
  headCell: {
    height: 55,
  },
  row: {
    '&:hover': {
      backgroundColor: '#E5E5E5 !important',
    },
  },
});

export const TableStyles = styled.div`
  background: #ffffff;
  border-radius: 2px;
`;
