import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <button className="boton-decrementar" onClick={decrementar}> - </button>
        <p className="numero-contador"> {contador} </p>
        <button className="boton-incrementar" onClick={incrementar}> + </button>
      </div>
      <button className="agregar-carrito" onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
