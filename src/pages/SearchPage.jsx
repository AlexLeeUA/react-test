import React, { Fragment } from 'react';
import { Grid, Input, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const SearchPage = ({ 
  id, 
  onChange, 
  getAsteroidById, 
  getRandomAsteroid, 
  asteroid,
  error
}) => {
  
  if (asteroid) {
    return <Redirect to="/info" />
  }

  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid container direction="column" item xs={3}>
        <Input 
          placeholder="Enter Asteroid ID" 
          value={id}
          onChange={onChange}
        />
        <span style={{color: 'red', fontSize: "1rem"}}>{error}</span>
      </Grid>
      <Grid container direction="column" item xs={3}>
        <Button 
          variant="contained" 
          color="primary"
          disabled={!id}
          onClick={getAsteroidById}
        >
          Submit
        </Button>
      </Grid>
      <Grid container direction="column" item xs={3}>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={getRandomAsteroid}
        >
          Random Asteroid
        </Button>
      </Grid>
    </Grid>
  )
}

export default SearchPage;