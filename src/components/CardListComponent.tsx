// src/components/CardListComponent.tsx
import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon'; // Используем для добавления иконок
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: '10px',
        padding: '20px',
        textAlign: 'left',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
        color: '#000',
    },
    content: {
        fontSize: 16,
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // Расположить карточки слева направо
        margin: '0 auto',
    },
    divider: {
        margin: '10px 0',
    },
});

interface CardItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    borderColor: string; // Цвет рамки
}

const cardData: CardItem[] = [
    {
        id: 1,
        title: 'Опитувальник з генералізованої тривоги',
        description: 'Скринінгова психологічна експрес-методика для діагностики генералізованої тривоги',
        icon: 'local_hospital',
        borderColor: '#4682B4', // Пример цвета рамки
    },
    {
        id: 2,
        title: 'Шкала депресії Бека',
        description: 'Скринінгова психологічна експрес-методика для діагностики генералізованої тривоги.',
        icon: 'psychiatry', // Можно использовать имена иконок из Material Icons
        borderColor: '#FF6347', // Пример цвета рамки
    },
    {
        id: 3,
        title: 'Тест на виявлення ознак емоційно-нестабільного розладу ',
        description: 'Скринінгова психологічна експрес-методика для виявлення ознак емоційно - нестабільного розладу.',
        icon: 'psychology',
        borderColor: '#32CD32', // Пример цвета рамки
    },
    // Добавьте другие карточки по аналогии
];

const CardListComponent: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        navigate(`/test/${id}`);
    };

    return (
        <div className={classes.cardContainer}>
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    className={classes.card}
                    style={{ border: `2px solid ${card.borderColor}` }} // Применение цвета рамки
                    onClick={() => handleCardClick(card.id)}

                >
                    <CardContent>
                        <div className={classes.header}>
                            <Typography variant="h6">
                                {card.title}
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <Typography className={classes.content}>
                            {card.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CardListComponent;
