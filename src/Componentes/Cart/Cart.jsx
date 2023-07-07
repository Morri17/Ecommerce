import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContex";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2> Aun no hay items en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3>Total: $ {total} </h3>
      <h3>Cantidad total: {cantidadTotal} </h3>
      <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
      <hr />
      <h4>
        <Link to="/checkout"> Finalizar Compra </Link>
      </h4>
    </div>
  );
};

export default Cart;
