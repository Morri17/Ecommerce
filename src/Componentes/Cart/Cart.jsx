import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContex";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2 className="carrito-vacio"> El carrito se encuentra vacio</h2>
        <Link className="ver-productos" to="/"> Ver Productos </Link>
      </>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3 className="cantidad-total">Cantidad total de productos: {cantidadTotal} </h3>
      <h3 className="total">Precio total de compra: ${total} </h3>
      <button className="vaciar-carrito" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
      <hr />
      <button className="finalizar-compra">
        <Link to="/checkout"> Finalizar Compra </Link>
      </button>
    </div>
  );
};

export default Cart;
