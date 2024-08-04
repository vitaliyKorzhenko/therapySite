import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

// Стили для компонента
const useStyles = makeStyles({
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: '"Roboto", sans-serif', // Вы можете выбрать другой шрифт
      },
});

const Title: React.FC = () => {
    const classes = useStyles();

    return (
        <Typography variant="h6" className={classes.title}>
            Кушніренко Ганна Василівна - Лікар-психіатр
        </Typography>
    );
};

export default Title;
