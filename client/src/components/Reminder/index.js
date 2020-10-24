import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading2: {
    marginBottom: '20px',
  },
  link: {
    textDecoration: "none",
  },
}))


const Reminder = () => {
  const classes = useStyles();

  return (
    <Box align='center'>
      <Typography variant='h2' className={classes.heading}>
        Reminders
      </Typography>
      <Typography variant='h4' className={classes.heading2}>
        Manage your current reminders
      </Typography>
      <div> connnect to alexa </div>
    </Box>
  );
}

export default Reminder;
