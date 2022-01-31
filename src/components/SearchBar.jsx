import React, { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSearch(city)
      e.target[0].value = ''
    }}>
      <input
        id='input'
        type="text"
        placeholder='Ciudad'
        onChange={e => setCity(e.target.value)}
      />
      <input
        id='submit'
        type="submit"
        value='Agregar'
      />
    </form>
  );
};