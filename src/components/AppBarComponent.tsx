// src/components/AppBarComponent.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Title from './TitleBar';
import HomeLink from './HomeIcon';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#fff', // Белый фон
        color: '#000', // Черный текст
        padding: '0 20px', // Уменьшаем ширину панели
    },
    title: {
        fontSize: '24px',               // Размер шрифта
        fontWeight: 'bold',             // Жирный шрифт
        color: '#333',                  // Цвет текста
        textAlign: 'center',            // Выравнивание по центру
        marginBottom: '16px',           // Отступ снизу
        fontFamily: '"Roboto", sans-serif', // Используемый шрифт
        textTransform: 'uppercase',     // Приведение текста к верхнему регистру
        letterSpacing: '0.5px',         // Межбуквенное расстояние
    },
    link: {
        margin: '0 10px',
        color: '#000', // Черный текст ссылок
        textDecoration: 'none',
        fontSize: '16px', // Размер текста ссылок
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    icon: {
        marginLeft: 10,
        color: 'red', // Красный цвет иконок
    }
});

const AppBarComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar} elevation={0}>
            <Toolbar>
                <HomeLink/>
              <Title />
                {/* <Link href="/" className={classes.link}
                >
                    Головна
                </Link> */}
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
