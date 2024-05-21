import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar () {
    return <>
    
        <nav className="nav-style">
            <div>
                <h1> Garage Sale </h1>
            </div>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/generos'> Generos </Link>
                </li>
                <li>
                    <Link to='/carrito'> Carrito </Link>
                </li>

            </ul>
        </nav>
    
    </>
}