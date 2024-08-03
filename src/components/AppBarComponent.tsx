// src/components/AppBarComponent.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#fff', // Белый фон
        color: '#000', // Черный текст
        padding: '0 20px', // Уменьшаем ширину панели
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
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
});

const AppBarComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar} elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                   Кушніренко Ганна
                </Typography>
                <Link href="/" className={classes.link}
                >
                    Головна
                </Link>
                <Link href="#" className={classes.link}>
                    Про Лікаря
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
