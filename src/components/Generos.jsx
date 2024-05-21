import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrayDiscos from "../data/arrayDiscos";
import './Discos.css';



export default function Generos () {

    const {genero} = useParams();
    const arrayGenero = arrayDiscos.filter(disco => disco.genero.toLowerCase() === genero.toLowerCase());

    return (

        <div className='lista-discos'>
      {arrayGenero.length > 0 ? (
        arrayGenero.map((disco, id) => (
          <div key={id} className='disco-item'>
            <h2>{disco.nombre}</h2>
            <p>{disco.artista}</p>
            <p>{disco.genero}</p>
            <Link to={`/producto/${disco.id}`}>Ver detalles</Link>
          </div>
        ))
      ) : (
        <p>No se encontraron discos en la categoría {genero}</p>
      )}
    </div>
    )
    
}