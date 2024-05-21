import React from 'react';
import { Link } from 'react-router-dom';
import arrayDiscos from '../data/arrayDiscos';
import Generos from './Generos';
import './Generos.css';

const mayusculaGeneros = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const generos = [...new Set(arrayDiscos.map(disco => disco.genero))];

export default function ListaGeneros() {
  const generos = [...new Set(arrayDiscos.map(disco => disco.genero))];

  return (
    <div className='lista-discos'>
      <h2>Géneros</h2>
      <ul>
        {generos.map((genero, index) => (
          <li key={index}>
            <Link to={`/genero/${genero.toLowerCase()}`}>{mayusculaGeneros(genero)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}