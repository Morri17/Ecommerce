import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();
  console.log(categoria);

useEffect(() => {
     const misProductos = categoria ? query(collection(db, "Productos"), where("categoria", "==", categoria)) :
    collection(db, "Productos");

    getDocs(misProductos)
    .then(res => {
       const nuevosProductos = res.docs.map( doc => {
        const data = doc.data()
        return{id: doc.id, ...data}
      })
      setProductos(nuevosProductos)
    })
    .catch(error => console.log(error));
}, [categoria])


  return (
    <>
      <div className="titulo">Compra tus mejores prendas aqui</div>
      <div className="contaier">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
