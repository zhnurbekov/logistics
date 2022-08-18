import React, { useLayoutEffect, useRef } from 'react';
import { SelectWrapper } from './SelectStyle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import QuestionIcon from '../../../media/Icons/QuestionIcon';
import ExpandMoreIcon from '../../../media/Icons/ExpandMoreIcon';
import { useTheme } from '@mui/styles';

export default function DisplayFieldComponents({
  handleOpen,
  setWidth,
  label,
  value,
  placeholder,
  ...props
}) {
  const ref = useRef();
  const { palette } = useTheme();

  useLayoutEffect(() => {
    ref && setWidth && setWidth(ref.current.offsetWidth);
  }, [ref]);

  return (
    <SelectWrapper onClick={handleOpen} ref={ref} {...props}>
      <div>
        <div>
          <Typography
            children={label}
            variant={'caption'}
            style={{ color: '#828282', marginRight: 10 }}
          />
          <IconButton
            children={<QuestionIcon style={{ fontSize: 16 }} />}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {!value && placeholder && (
          <Typography
            sx={{ color: palette.action.main }}
            variant={'body2'}
            children={placeholder}
          />
        )}
        {value && (
          <div
            variant={'body2'}
            children={value}
            style={{
              width: '90%',
              whiteSpace: 'nowrap',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
        )}
      </div>
      <ExpandMoreIcon style={{ fontSize: 10 }} />
    </SelectWrapper>
  );
}
