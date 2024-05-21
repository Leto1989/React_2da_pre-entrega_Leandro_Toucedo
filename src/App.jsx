import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discos from './components/Discos';
import DetalleProducto from './components/DetalleProducto';
import Generos from './components/Generos';
import ListaGeneros from './components/ListaGeneros';
import Carrito from './components/Carrito';
import { CarritoProvider } from './components/CarritoContext';
import './App.css';

function App() {
  

  return (
    <>
       <CarritoProvider>
          <Router>
            <div className='app-container'>
      
              <Navbar />
              <div className="main-content">
                <h1> Tienda de discos </h1>
                <Routes>
                 <Route path="/" element={<Discos />} />
                  <Route path="/producto/:id" element={<DetalleProducto />} />
                  <Route path="/generos" element={<ListaGeneros />} />
                  <Route path="/genero/:genero" element={<Generos />} />
                  <Route path="/carrito" element={<Carrito />} />
                </Routes>
              </div>
            </div>
          </Router>
       </CarritoProvider>
    </>
  )
}

export default App
