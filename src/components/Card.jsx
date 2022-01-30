import React from 'react';
import './Card.css'

export default function Card({ name, min, max, img, onClose }) {
  // acá va tu código
  return (
    <div className='container'>
      <button onClick={onClose}>X</button>
      <div className='name'>{name}</div>
      <div className='container-temp'>
        <div className='temp'>
          <span>
            <p>Min</p>
            <p className='num'>{min}°</p>
            <hr />
            <p>Max</p>
            <p className='num'>{max}°</p>
          </span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Clima" />
      </div>
    </div>
  )
};