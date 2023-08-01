import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div className="auth-button">Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="auth-button">
        <button onClick={() => logout()}>Logout</button>
        <img className="imgPerfil" src={user.picture} alt="imagen de perfil" />
        <p className="nombreUsuario">{user.name}</p>
      </div>
    );
  } else {
    return (
      <button className="auth-button" onClick={() => loginWithRedirect()}>
        Login
      </button>
    );
  }
};

export default AuthButton;
