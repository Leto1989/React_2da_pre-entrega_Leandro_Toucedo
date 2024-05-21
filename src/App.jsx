import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discos from './components/Discos';
import DetalleProducto from './components/DetalleProducto';
import Generos from './components/Generos';
import ListaGeneros from './components/ListaGeneros';
import './App.css';

function App() {
  

  return (
    <>
       <Router>
      <div className='app-container'>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Discos />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/generos" element={<ListaGeneros />} />
            <Route path="/genero/:genero" element={<Generos />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
