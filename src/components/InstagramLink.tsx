import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Центрирование по горизонтали
        marginTop: '16px',
    },
    link: {
        color: '#006400!important', // Цвет ссылки
        textDecoration: 'none',
        fontWeight: 'bold',
        marginRight: '8px',
        fontSize: '20px',
    },
    icon: {
        color: 'red',
    },
    text: {
        fontSize: '16px',
        fontWeight: 'bold', // Жирный текст
        marginRight: '8px', // Отступ от ссылки
    },
});

const InstagramLink: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography component="span" className={classes.text}>
                {'Дізнавайтеся більше: '}
            </Typography>
            <IconButton
                className={classes.icon}
                color="inherit"
                href="https://www.instagram.com/dr_kushnirenko.hanna?igsh=MWwwdDAzOTN3MzZkcw=="
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </IconButton>
            <a
                href="https://www.instagram.com/dr_kushnirenko.hanna?igsh=MWwwdDAzOTN3MzZkcw=="
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
            >
                dr_kushnirenko_hanna
            </a>
        </div>
    );
};

export default InstagramLink;
