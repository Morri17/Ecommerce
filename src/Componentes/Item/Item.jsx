import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <>
      <Container className="container">
        <Card className="card">
          <Card.Body>
            <CardImg className="img-fluid" src={img} alt={nombre}></CardImg>
            <hr />
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>${precio}</Card.Text>
            <Card.Text>Descripcion del producto</Card.Text>
            <Link className="ver-detalles" to={`/item/${id}`}>
              {" "}
              Ver Detalles{" "}
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Item;
