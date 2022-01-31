import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Ciudad from './components/Ciudad';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = 'e1d975199c3e6a243dde0bea1e93c554';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((data) => {
        if (data.main) {
          const ciudad = {
            min: data.main.temp_min,
            max: data.main.temp_max,
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          }

          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert('Verifique el nombre ingresado.')
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        path='/About'
        component={About}
      />
      <Route
        exact
        path='/'
        render={() => <Cards
          cities={cities}
          onClose={onClose}
        />}
      />
      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}

export default App;
