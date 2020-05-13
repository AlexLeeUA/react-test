import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Typography, Button, Link } from '@material-ui/core';

const InfoPage = ({ asteroid, clearData }) => {

  if (!asteroid) {
    return <Redirect to="/" />
  }

  const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = asteroid;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
    >
      <Typography variant="h4">
        Name: {name}
      </Typography>
      <Typography variant="h4">
        Nasa URL: <Link href={nasa_jpl_url} target="_blank">{nasa_jpl_url}</Link>
      </Typography>
      <Typography variant="h4">
        Potentially hazardous: {`${is_potentially_hazardous_asteroid}`}
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={clearData}
      >
        New Search
      </Button>
    </Grid>
  )
}

export default InfoPage;