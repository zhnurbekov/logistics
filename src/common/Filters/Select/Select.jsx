import React from 'react';
import { selectSx, useStyles, Wrapper } from './SelectStyle';
import { ListItemText, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DisplayFieldComponents from './DisplayFieldComponents';

function SelectComponent(props) {
  const { options = [], onChange, value, label = '', wrapperProps, placeholder } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [width, setWidth] = React.useState('100%');
  const classes = useStyles({ anchorEl });
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const open = Boolean(anchorEl);
  const selectedOption = options.find((item) => item?.value === value);

  const onSelect = (value) => {
    onChange(value.value);
    handleClose();
  };

  return (
    <div {...wrapperProps}>
      <DisplayFieldComponents
        handleOpen={handleOpen}
        setWidth={setWidth}
        label={label}
        value={selectedOption?.name}
        placeholder={placeholder}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ sx: { ...selectSx.menu, width } }}
      >
        {options.map((option) => (
          <MenuItem
            selected={value === option.value}
            classes={{
              selected: classes.selected,
              root: classes.root,
            }}
            sx={{ height: '56px' }}
            key={option.value}
            value={option.value}
            onClick={() => onSelect(option)}
          >
            <ListItemText
              primary={option['name']}
              className={classes.listItem}
              primaryTypographyProps={selectSx.listItem}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const Select = (props) => {
  const { withoutForm, name, onChange, size, className, selectStyle, style, ...restProps } = props;
  return (
    <Wrapper size={size} selectStyle={selectStyle} style={style} className={className}>
      <SelectComponent name={name} onChange={onChange} {...restProps} />
    </Wrapper>
  );
};

export default Select;
