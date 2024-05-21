import React from 'react';
import {Link} from 'react-router-dom';
import arrayDiscos from '../data/arrayDiscos';
import './Discos.css'; 

export default function Discos ()  {
    
  const mostrarArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const mostrarDiscos = mostrarArray(arrayDiscos);

    return (<>
    
    <div className='lista-discos'>
      {mostrarDiscos.map((disco, id) => (
        <div key={id} className='disco-item'>
          <h2>{disco.nombre}</h2>
          <p>{disco.artista}</p>
          <Link to={`/producto/${disco.id}`}> Ver detalles </Link>
        </div>
      ))}
    </div>
    
    </>);
}