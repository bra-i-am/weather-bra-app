import React from 'react';
import Card from './Card';

import './Cards.css'

export default function Cards({ cities, onClose }) {
  if (cities.length !== 0) {
    return (
      <div className='containerCards'>
        {cities.map(ciudad => {
          return <Card
            key={ciudad.id}
            id={ciudad.id}
            name={ciudad.name}
            min={ciudad.min}
            max={ciudad.max}
            img={ciudad.img}
            onClose={() => onClose(ciudad.id)}
          />
        })}
      </div>
    )
  } else {
    return (
      <div>
        <div className='errormsg'>
          Busque una ciudad.
        </div>
      </div>
    )
  }
};