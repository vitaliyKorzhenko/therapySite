import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

const styles = {
  iconButton: {
    color: '#333', // Цвет иконки
    fontSize: '30px', // Размер иконки
    margin: '10px', // Отступы
    '&:hover': {
      color: '#007bff', // Цвет при наведении
    },
  },
};

const HomeLink: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <IconButton style={styles.iconButton}>
        <HomeIcon />
      </IconButton>
    </Link>
  );
};

export default HomeLink;
