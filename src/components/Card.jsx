import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card({ name, min, max, img, id, onClose }) {
  // acá va tu código
  return (
    <div className='container'>
      <button onClick={onClose}>X</button>
      <Link to={`/ciudad/${id}`}>
        <div className='name'>{name}</div>
      </Link>
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