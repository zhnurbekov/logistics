import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

export const Styles = styled.div`
  padding-bottom: 60px;
  .label {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #7c7c7c;
  }

  .value-details {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #141414;
  }

  hr {
    border: 1px dashed #e9e9e9;
    margin-top: 13px;
    margin-bottom: 4px;
  }

  a {
    color: #39569a;
    cursor: pointer;
  }
`;

export const FileStyles = styled.div`
  margin-bottom: 10px;
  .paper {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(170, 170, 170, 0.25);
    border-radius: 8px;
    padding: 13px 22px 13px 18px;
  }

  .order-number {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 10px;
    gap: 10px;
    background: #2a2e37;
    border-radius: 3px;
    color: #ffffff;
    text-align: left !important;
    justify-content: left;
  }
`;

export const useStyles = makeStyles({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px !important',
    gap: '10px !important',
    background: '#FFFFFF !important',
    boxShadow: '0px 4px 10px rgba(221, 222, 222, 0.5) !important',
    borderRadius: '8px !important',
    color: '#141414 !important',
    textTransform: 'none !important',
    fontSize: '13px !important',
    height: '40px !important',
    fontWeight: '700 !important',
  },
  splitBtn: {
    borderRadius: '8px !important',
    color: '#141414 !important',
    fontSize: '13px !important',
    fontWeight: '700 !important',
    marginLeft: '16px !important',
    background: '#F9F9F9 !important',
    height: '40px !important',
    '&:hover': {
      backgroundColor: '#FF5353 !important',
      color: '#FFFFFF !important',
      border: 'none !important',
    },

    boxSizing: 'border-box',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    border: '1px solid #FB2C2C',
    boxShadow: '0px 4px 10px rgba(221, 222, 222, 0.5)',
  },
});

export const downloadBtn = {
  padding: '2px',
  background: '#E3E6EB',
  minWidth: '20px',
  height: '20px',
  borderRadius: 0,
};

export const avatarSx = {
  bgcolor: '#E3E6EB',
  marginBottom: '14px',
  marginLeft: '10px',
  width: 100,
  height: 100,
};

export const useStatusStyles = makeStyles({
  select: {
    borderRadius: '2px 2px 0px 0px !important',
    padding: '8px 15px ',
    height: '32px',
    background: '#FFFFFF',
    border: '1px solid #EEEEEE',
    width: '230px',
  },
  paper: {
    borderTopLeftRadius: '2px !important',
    borderTopRightRadius: '2px !important',
    marginTop: 5,
  },
  input: {
    padding: '0px !important',
    paddingRight: '20px !important',

    '& .input-label': {
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});

export const statusStyles = {
  selectMenuProps: {
    background: '#FFFFFF',
    borderTopLeftRadius: '2px !important',
    borderTopRightRadius: '2px !important',
    width: '230px',
    padding: 0,
  },
  menuItem: {
    height: '38px',
    whiteSpace: 'break-spaces',
    padding: '8px 13px',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    color: '#57617B',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 50,
    marginRight: 10,
  },
};
