import React from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const MainScreen = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField label="Tabs for Navigation" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Input Field" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Combo Box" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Navigation Button" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Progress Indicator" name="" fullWidth /></Grid>
        <Grid item><Button variant='contained' color='primary'>Submit</Button></Grid>
        <Grid item><Button variant='contained' color='primary'>Cancel</Button></Grid>
      </Grid>
    </Container>
  );
};

export default MainScreen;