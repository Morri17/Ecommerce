import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="containerMadre">
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default Contacto;
