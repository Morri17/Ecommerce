import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContex";
import "./CartItem.css";

const CartItem = ({ item, cantidad, }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cart-item">
      <h4> {item.nombre} </h4>
      <h2>
        <img src={item.img} alt="" />
      </h2>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: {item.precio} </p>
      <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  );
};

export default CartItem;
