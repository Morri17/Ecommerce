// JSX = ES UNA EXTENSION DE JS.
// import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemList from "./Componentes/ItemList/ItemList";
import Header from "./Componentes/NavBar-Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemDetailContainer from "./Componentes/ItemDetailContaniner/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Componentes/Contacto/Contacto";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="contacto" element={<Contacto />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>sitio en construccion</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
