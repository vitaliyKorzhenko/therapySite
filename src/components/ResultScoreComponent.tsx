import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface ResultProps {
  score: number;
  anxietyMessage: string;
  note: string;
}

const ResultScore: React.FC<ResultProps> = ({ score, anxietyMessage, note }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center',
        border: '2px solid red', // Красная рамка
        borderRadius: '8px', // Закругленные углы
      }}
    >
      <Typography variant="h5" component="div" gutterBottom>
        Результат
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Ваш результат: <span style={{ color: 'red' }}>{score}</span> {/* Красный цвет результата */}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
  <span style={{ color: '#f06292' }}>{anxietyMessage}</span> {/* Розоватый цвет для сообщения */}
</Typography>
      <Typography variant="body2" color="textSecondary" component="div">
        {note}
      </Typography>
    </Paper>
  );
};

export default ResultScore;
