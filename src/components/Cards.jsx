import React from 'react';
import Card from './Card';

import './Cards.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return (
      <div className='containerCards'>
        {cities.map(ciudad => {
          return <Card
            name={ciudad.name}
            min={ciudad.main.temp_min}
            max={ciudad.main.temp_max}
            img={ciudad.weather[0].icon}
            onClose={() => onClose()}
          />
        })}
      </div>
    )
  } else {
    return (
      <div>No se encontraron ciudades</div>
    )
  }
};