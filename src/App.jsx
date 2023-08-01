import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Header from "./Componentes/NavBar-Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./Componentes/ItemDetailContaniner/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Componentes/Cart/Cart";
import { CarritoProvider } from "./Context/CarritoContex";
import background from "../src/assets/Imagenes/background.jpg";
import CheckOut from "./Componentes/CheckOut/CheckOut";

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
        overflowY: "scroll",
      }}
    >
      <BrowserRouter>
        <CarritoProvider>
          <Header />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route path="*" element={<h2>sitio en construccion</h2>} />
            <Route path="/checkout" element={<CheckOut />}></Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
