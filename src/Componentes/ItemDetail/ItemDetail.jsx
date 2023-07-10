import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContex";
import { useContext } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="container">
      <div className="container-detalle">
        <img src={img} alt={nombre} className="image" />
        <div className="details">
          <h1 className="title">Nombre: {nombre}</h1>
          <strong className="price">Precio: {precio}</strong>
          <p className="description">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="agregar-cantidad">
          {agregarCantidad > 0 ? (
            <Link to="/cart" className="link">
              Terminar compra
            </Link>
          ) : (
            <ItemCount
              inicial={1}
              stock={stock}
              funcionAgregar={manejadorCantidad}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
