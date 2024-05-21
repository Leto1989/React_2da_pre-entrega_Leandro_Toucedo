import React, {createContext, useState, useContext, Children} from "react";

const CarritoContext = createContext();

 const usarCarrito = () => {
    return useContext(CarritoContext);
};

 const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (disco) => {
        setCarrito(prevCarrito => [...prevCarrito,disco]);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
          {children}
        </CarritoContext.Provider>
      );
}
export { CarritoProvider, usarCarrito, CarritoContext };
export default CarritoContext;