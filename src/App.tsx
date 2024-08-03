// src/App.tsx
import React from 'react';
import './App.css';
import AppBarComponent from './components/AppBarComponent';
import InfoCardComponent from './components/infoCardComponent';
import { Typography } from '@mui/material';
import CardListComponent from './components/CardListComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Используйте BrowserRouter
import TestPage from './components/TestPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
            <AppBarComponent />
            <Routes>
                    <Route path="/" element={
                    <>
                    <InfoCardComponent />
                    <div className="centeredText">
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                    Тестування на виявлення можливих ментальних порушень
                </Typography>
            </div>
                    <CardListComponent />
                    </>
                    } />
                    <Route path="/test/:id" element={<TestPage />} />
                </Routes>
        </div>
        </Router>

    );
};

export default App;
