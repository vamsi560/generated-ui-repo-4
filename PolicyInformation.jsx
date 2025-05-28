import React from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

const PolicyInformation = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}><TextField label="Path ID" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Policy Number" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Effective Date" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Expiration Date" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Rate Level" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Policy Type" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="PMA Description" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Named Insured's Profession" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Primary Insured" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="City" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="State" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Company Name" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Product Code" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Program" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Terrorism Coverage" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Exclude NBC" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="NYFTZ Class Type" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Class Code" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="NY Free Trade Zone" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Tutoring Operations" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Business Type" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Primary State" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Safety Credit Group" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Document Primary State" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Agency Code" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Agency Sub Code" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Agency Name" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="Agency Sub Name" name="" fullWidth /></Grid>
        <Grid item xs={12}><TextField label="City/State" name="" fullWidth /></Grid>
        <Grid item><Button variant='contained' color='primary'>OK</Button></Grid>
        <Grid item><Button variant='contained' color='primary'>Cancel</Button></Grid>
        <Grid item><Button variant='contained' color='primary'>Path Update</Button></Grid>
      </Grid>
    </Container>
  );
};

export default PolicyInformation;