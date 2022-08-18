import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

export const Wrapper = styled.div`
  width: 100%;

  .MuiSelect-select:focus {
    background-color: transparent;
  }

  .MuiFormControl-root {
    margin: 0;
  }

  .css-6hp17o-MuiList-root-MuiMenu-list {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }

  '.css-h858p4-muitypography-root': {
    font-size: 10px !important;
  }

  .selectWrapper {
    width: 363px;
    height: 62px;
    left: 0px;
    top: 0px;

    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 8px;
  }
`;

export const SelectWrapper = styled.div`
  height: 62px;
  left: 0px;
  top: 0px;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;

  p {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
  }

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 9px 15px 10px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const useStyles = makeStyles((theme) => ({
  helperTextRoot: {
    marginLeft: 14,
  },
  listItem: {
    fontWeight: 400,
    fontSize: '12px !important',
    lineHeight: 16,
  },
  selected: {
    backgroundColor: '#E3E6EB !important',
  },
  root: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    height: 200,
  },
}));

export const selectSx = {
  menu: {
    padding: 0,
    background: '#FFFFFF',
    boxShadow: '0px 5px 18px rgba(40, 41, 61, 0.07)',
    height: 221,
    overflow: 'scroll',
  },
  listItem: {
    fontSize: 12,
    fontWeight: 400,
    color: '#57617B',
  },
};
