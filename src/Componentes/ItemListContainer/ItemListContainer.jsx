import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

    useEffect(() => {
        const funcion = categoria ? getProductoPorCategoria : getProductos;

        funcion(categoria)
            .then(res => setProductos(res))

    }, [categoria])


  return (
    <>
      <div className="titulo">Compra tus mejores prendas aqui</div>

      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;



// otra forma de poder hacer el filtrado por categorias.
/*const categoria = useParams().categoria;
console.log(categoria);

useEffect(() => {
  getProductos().then((res) => {
    if (categoria) {
      setProductos(res.filter((prod) => prod.categoria === categoria));
    } else {
      setProductos(res);
    }
  });
}, [categoria]); */