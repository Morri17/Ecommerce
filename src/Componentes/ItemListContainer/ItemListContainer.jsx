import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import Card from "react-bootstrap/Card";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    getProductos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
      } else {
        setProductos(res);
      }
    });
  }, [categoria]);

  return (
    <>
      <div className="titulo">Compra tus mejores prendas aqui</div>

      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;

//const funcion = categoria ? getProductoPorCategoria : getProductos;

//    funcion(categoria)
//       .then(res => setProductos(res));
