import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import InfoPage from './pages/InfoPage';
import MainService from './services/mainService';
import { Grid, CircularProgress } from '@material-ui/core';

const App = () => {

  const [asteroid, setAsteroid] = useState(null);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const onChange = (e) => setId(e.target.value);

  const clearData = () => {
    setAsteroid(null);
    setId('');
    setError(null);
  };
 
  const getAsteroidById = async () => {
    try {
      setIsLoading(true);

      const asteroid = await MainService.getAsteroidById(id);
      setAsteroid(asteroid);
    }
    catch (e) {
      setError(e.message);
      console.error(e);
    }
    finally {
      setIsLoading(false);
    }
  }

  const getRandomAsteroid = async () => {
    try {
      setIsLoading(true);

      const asteroidsList = await MainService.getAsteroidsList();
      const totalPages = asteroidsList.page.total_pages;
      const randomPage = Math.floor(Math.random() * totalPages);
      
      const { near_earth_objects } = await MainService.getAsteroidsList(randomPage);
      const randomIndex = Math.floor(Math.random() * near_earth_objects.length);
      const { id } = near_earth_objects[randomIndex];

      const asteroid = await MainService.getAsteroidById(id);
      setAsteroid(asteroid);
    }
    catch (e) {
      console.error(e)
    }
    finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => 
          <SearchPage 
            {...props} 
            id={id} 
            asteroid={asteroid}
            onChange={onChange} 
            getAsteroidById={getAsteroidById} 
            getRandomAsteroid={getRandomAsteroid} 
            error={error}
          />} 
        />
        <Route exact path="/info" render={(props) => 
          <InfoPage 
            {...props} 
            id={id} 
            asteroid={asteroid} 
            clearData={clearData} 
          />} 
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
};
  

export default App;
