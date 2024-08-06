import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  boldText: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '20px'
  },
  mainText: {
    textAlign: 'left',
    fontSize: '16px'
  }
});

const Title: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography  className={classes.mainText}>
       <span className={classes.boldText}>
        Кушніренко Ганна Василівна
        </span>
      <br />
      <span className={classes.boldText}>лікар-психіатр</span>
    </Typography>
  );
};

export default Title;
