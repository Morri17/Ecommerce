import { useState, useEffect } from "react";

//importar funciones de firebase para poder mostrar los productos:

import {
  getDocs,
  collection,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../services/config";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // const misProductos = query(collection(db, "productos"));

    //ahora para filtrar

    const misProductos = query(
      collection(db, "productos"),
      where("precio", ">", 150)
    );
    getDocs(misProductos).then((res) => {
      setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    //creo un array que tenga los datos del productos y ademas el id.
  }, []);

  // funcion para descontar stock

  const descontarStock = async (producto) => {
    const ProductosRef = doc(db, "productos", producto.id);
    const nuevoStock = producto.stock - 1;

    await updateDoc(ProductosRef, { stock: nuevoStock });
  };

  return (
    <>
      <h1>Mis Productos</h1>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <h3>{producto.precio}</h3>
          <button onClick={() => descontarStock(producto)}>Comprar</button>
        </div>
      ))}
    </>
  );
};

export default Productos;
