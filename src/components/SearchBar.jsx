import React from 'react';
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <form>
      <input id='input' type="text" placeholder='Ciudad' />
      <input id='submit' type="submit" value='Agregar'/>
    </form>
  )
};