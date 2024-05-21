import React from 'react';
import {useParams} from 'react-router-dom';
import './DetalleProducto.css';
import '../data/arrayDiscos';
import arrayDiscos from '../data/arrayDiscos';






export default function DetalleProducto () {
   const {id} = useParams();
   const disco = arrayDiscos.find(disco => disco.id);

   if(!disco){
       return <div> Disco no encontrado </div>
   }

   const handleAddToCart = () => {
    
    console.log(`${disco.nombre} ha sido agregado al carrito.`);
  };

   return (
    <div className='detalle-producto'>
        <h2>{disco.nombre}</h2>
        <p><strong> Artista:</strong> {disco.artista}</p>
        <p><strong> Género: </strong> {disco.genero}</p>
        <p><strong> Año de lanzamiento: </strong> {disco.lanzamiento}</p>
        <p><strong> País de orígen: </strong> {disco.pais}</p>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
   );
}


