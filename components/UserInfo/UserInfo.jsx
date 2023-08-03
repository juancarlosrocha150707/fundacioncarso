// Importamos las bibliotecas y recursos necesarios para el componente.
import React from "react";
import "./UserInfo.css"; // Importamos los estilos CSS para el componente.
import { FaUserAlt } from "react-icons/fa"; // Importamos el icono de usuario.
import logo from "../../assets/Logo_Capacitate_White.png"; // Importamos el logo de la aplicación.

// Definimos el componente funcional UserInfo que recibe un objeto 'user' como prop.
const UserInfo = ({ user }) => {

  return (
    <div className="user-info-container"> {/* Contenedor principal del componente */}
      <img className="logo" src={logo} alt="logo" /> {/* Mostramos el logo de la aplicación */}
      <div className="avatar"> {/* Contenedor del icono de usuario */}
        <FaUserAlt /> {/* Mostramos el icono de usuario */}
      </div>
      <div className="user-info"> {/* Contenedor de la información del usuario */}
        <p className="user-pp">¡Bienvenido!</p> {/* Mensaje de bienvenida */}
        <p className="user-name">{user.name} {user.lastName}</p> {/* Mostramos el nombre y apellido del usuario */}
        <p className="user-email">{user.email}</p> {/* Mostramos el correo electrónico del usuario */}
      </div>
    </div>
  );
};

export default UserInfo; // Exportamos el componente UserInfo.
