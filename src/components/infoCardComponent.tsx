// src/components/InfoCardComponent.tsx
import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        maxHeight: 200,
        margin: '20px auto',
        padding: '20px',
        textAlign: 'left',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        marginLeft: 10,
        color: '#000',
        textDecoration: 'none',
    },
    icon: {
        marginLeft: 10,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5,
    },
    contentIcon: {
        marginRight: 10,
        color: '#000',
    },
});

const InfoCardComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.subtitle}>
                    <Typography component="span">
                        dr_kushnirenko_hanna
                    </Typography>
                    <IconButton
                        className={classes.icon}
                        color="inherit"
                        href="https://www.instagram.com/dr_kushnirenko.hanna?igsh=MWwwdDAzOTN3MzZkcw=="
                        target="_blank"
                        rel="noopener"
                    >
                        <InstagramIcon />
                    </IconButton>
                </div>
                <div className={classes.content}>
                    <MedicalServicesIcon className={classes.contentIcon} />
                    <Typography>
                        Лише доказова медицина, 20 років досвіду
                    </Typography>
                </div>
                <div className={classes.content}>
                    <PsychologyIcon className={classes.contentIcon} />
                    <Typography>
                        Лікар-психіатр вищої категорії
                    </Typography>
                </div>
                <div className={classes.content}>
                    <PsychologyIcon className={classes.contentIcon} />
                    <Typography>
                        Лікар-невролог
                    </Typography>
                </div>
                <div className={classes.content}>
                    <LocalHospitalIcon className={classes.contentIcon} />
                    <Typography>
                        Лікар-нарколог
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default InfoCardComponent;
