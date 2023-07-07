import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContex";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <strong>Precio: {precio}</strong>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div>
        <img src={img} alt={nombre} />
      </div>
      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
