import React from 'react';
import { usarCarrito } from './CarritoContext';
import './Carrito.css';


export default function Carrito() {
    const { carrito } = usarCarrito();
  
    return (
      <div className='carrito'>
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>No hay discos en el carrito</p>
        ) : (
          <ul>
            {carrito.map((disco, index) => (
              <li key={index}>
                <h3>{disco.nombre}</h3>
                <p>{disco.artista}</p>
                <p>{disco.lanzamiento}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }