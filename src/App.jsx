// JSX = ES UNA EXTENSION DE JS.
// import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Header from "./Componentes/NavBar-Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemDetailContainer from "./Componentes/ItemDetailContaniner/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Componentes/Contacto/Contacto";
import Cart from "./Componentes/Cart/Cart";
import { CarritoProvider } from "./Context/CarritoContex";
import background from "../src/assets/Imagenes/background.jpg";
import Footer from "./Componentes/Footer/Footer";
import Productos from "./Componentes/Productos/Productos";
import Formulario from "./Componentes/Formulario/Formulario";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: 0,
        left: 0,
        overflowY: 'scroll'
      }}
    >
      <BrowserRouter>
        <CarritoProvider>
          <Header />

          <Routes>
            <Route path="contacto" element={<Contacto />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>sitio en construccion</h2>} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
