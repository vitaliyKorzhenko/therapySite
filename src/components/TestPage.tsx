// src/components/TestPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Divider from '@mui/material/Divider';
import { allTestData, analyseScore } from '../data/testData';
import Result from './ResultScoreComponent'; // Импортируем компонент Result

const useStyles = makeStyles({
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    instruction: {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    questionCard: {
        margin: '10px 0',
        padding: '15px',
        border: '2px solid #e3f2fd', // Light blue border with less saturation
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Выравнивание содержимого влево
    },
    questionHeader: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#2196f3', // Blue color for "Обробити"
        paddingBottom: '5px',

    },
    answerHeader: {
        fontSize: '20px',
        fontWeight: 'bold',
        paddingBottom: '5px',
        textAlign: 'left', /* Выравнивание текста по левому краю */
        overflowWrap: 'break-word'
    },
    answer: {
        marginBottom: '5px', // Уменьшен отступ
        marginLeft: '0', // Прижать влево
        width: '100%', // Выравнивание ответов по ширине карточки
    },
    divider: {
        margin: '20px 0',
    },
    highlight: {
        color: '#006400',
        fontWeight: 'bold',
    },
    formControl: {
        width: '100%', // Выравнивание RadioGroup по ширине карточки
    },
    formControlLabel: {
        marginLeft: '0', // Прижать опции влево
    },
    submitButton: {
        marginTop: '20px',
        width: '50%', // Width of the button
        marginLeft: 'auto', // Align left
        marginRight: '0', // Align right
        height: '50px',
        backgroundColor: '#006400!important', // Bright green background color
        color: '#FFFFFF!important', // White text color
        border: '2px solid #006400!important', // Green border
        borderRadius: '25px', // Rounded corners for a more elegant look
        fontWeight: 'bold', // Bold text
        fontSize: '16px', // Larger font size for better readability
        transition: 'all 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          backgroundColor: '#00CC00', // Darker green background color on hover
          borderColor: '#00CC00', // Darker green border on hover
          color: '#FFFFFF', // Ensure text remains white on hover
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover for depth
        },
    }
});


export interface QuestionOption {
    text: string
    point?: number
}


export interface Question {
    id: number;
    options: QuestionOption[];
    number: number;
    header: string;
}
export interface TestInfo {
    id: number;
    header: string;
    questions: Question[];
    instruction: string;
    resultInfo?:  string;
}


export interface QuestionOld {
    id: number;
    options: string[];
    number: number;
    header: string;
}

export interface TestInfoOld {
    id: number;
    header: string;
    questions: QuestionOld[];
    instruction: string;
    resultInfo?:  string;
}



const TestPage: React.FC = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [answers, setAnswers] = useState<Record<number, QuestionOption>>({});


    const [showResult, setShowResult] = useState(false);

    const [resultText, setResultText] = useState('');

    const [currentScore, setCurrentScore] = useState(0);


    const testData: TestInfo | undefined = allTestData().find(test => test.id == Number(id));
    const handleAnswerChange = (questionId: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedText = event.target.value;
        const questions = testData ? testData.questions.find(question => question.id == questionId): null;
        const selectedOption = questions ? questions.options.find(option => option.text === selectedText): null;
    
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: {
                text: selectedText,
                point: selectedOption?.point
            }
        }));
    }

    const handleSubmit = () => {
        // Обработка отправки данных теста
        let score = 0;
        for (let key in answers) {
            if (answers[key]&& answers[key].point !== undefined) {
                score += answers[key]?.point ?? 0;
            }
        }
        let testId = testData ? testData.id : 0;
        let result = analyseScore(testId, score);
        setResultText(result);
        setCurrentScore(score);
        setShowResult(true);

}
    if (!testData) {
        return (
            <>
            </>
        )
    }
    return (
        <div className={classes.container}>
            <Typography className={classes.questionHeader} variant="h4" component="div">
                {testData.header}
            </Typography>
            <Divider className={classes.divider} />
            <Typography className={classes.instruction}>
                <h4>Інструкція</h4>
                {testData.instruction}
                <br />
                Після заповнення опитувальника натисніть на кнопку <span className={classes.highlight}>Обробити</span>
            </Typography>
            <Divider className={classes.divider} />
            {testData?.questions.map(question => (
                <Card key={question.id} className={classes.questionCard}>
                    <CardContent>
                        { question.header && question.header.length > 0 ?
                    
                        <Typography className={classes.answerHeader}>
                            <span className={classes.highlight}>{question.number}.{' '}</span>{question.header}
                        </Typography>
                        : null
                        }
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                value={answers[question.id]?.text || ''}
                                onChange={handleAnswerChange(question.id)}
                            >
                                {question.options.map(option => (
                                    <FormControlLabel
                                        key={option.text}
                                        value={option.text}
                                        control={<Radio />}
                                        label={option.text}
                                        className={classes.answer}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                </Card>
            ))}
            <Button
                variant="outlined" // Используем полую кнопку
                onClick={handleSubmit}
                className={classes.submitButton}
            >
                ОБРОБИТИ
            </Button>
            {showResult && (
            <Result
                score={currentScore}
                anxietyMessage={resultText}
                note= {testData.resultInfo ? testData.resultInfo : ''}
            />
        )}
        </div>
    );
};

export default TestPage;
