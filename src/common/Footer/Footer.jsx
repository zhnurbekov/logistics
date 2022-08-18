import React from 'react';
import { StyledFooter } from './FooterStyle';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';

function Footer() {
  return (
    <StyledFooter>
      <Typography children={'© 2022 ООО “Компания”, Все права защищены.'} />
      <div className="flex items-center links" style={{ marginTop: 20 }}>
        <Link
          underline={'none'}
          component="button"
          variant="body2"
          children={'Вопрос-ответ'}
          sx={{ color: '#606B87' }}
        />
        <Link
          underline={'none'}
          component="button"
          variant="body2"
          children={'Политика конфиденциальности'}
          sx={{ color: '#606B87', marginLeft: '65px', marginRight: '70px' }}
        />
        <Link
          sx={{ color: '#606B87' }}
          underline={'none'}
          component="button"
          variant="body2"
          children={'История обновлений'}
        />
      </div>
    </StyledFooter>
  );
}

export default Footer;
