import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContex";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      
      <h4> {item.nombre} </h4>
      <h2><img src={item.img} alt="" /></h2>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: {item.precio} </p>
      <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  );
};

export default CartItem;
