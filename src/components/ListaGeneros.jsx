import React from 'react';
import { Link } from 'react-router-dom';
import arrayDiscos from '../data/arrayDiscos';
import './ListaGeneros.css';

export default function ListaGeneros() {
  const generos = [...new Set(arrayDiscos.map(disco => disco.genero))];

  return (
    <div>
      <h2>Géneros</h2>
      <ul>
        {generos.map((genero, index) => (
          <li key={index}>
            <Link to={`/genero/${genero.toLowerCase()}`}>{genero}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}