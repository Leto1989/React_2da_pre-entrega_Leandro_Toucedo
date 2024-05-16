import React from 'react';
import arrayDiscos from '../data/arrayDiscos';
import './Discos.css'; 

export default function Discos ()  {
    
    return (<>
    
    <div className='lista-discos'>
      {arrayDiscos.map((disco, index) => (
        <div  className='disco-item'>
          <h2>{disco.nombre}</h2>
          <p>{disco.artista}</p>
          <p>{disco.lanzamiento}</p>
        </div>
      ))}
    </div>
    
    </>);
}