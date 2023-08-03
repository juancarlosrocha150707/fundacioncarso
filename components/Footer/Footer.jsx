// Importamos las bibliotecas y los componentes necesarios.
import React, { useState } from "react";
import "./Footer.css"; // Importamos los estilos CSS para el componente Footer.
import "./SocialIcons.css"; // Importamos los estilos CSS para los iconos de redes sociales.
import "./StoreIcons.css"; // Importamos los estilos CSS para los iconos de tiendas de aplicaciones.
import "./ContactForm.css"; // Importamos los estilos CSS para el formulario de contacto.
import SocialIcons from "./SocialIcons"; // Importamos el componente SocialIcons.
import StoreIcons from "./StoreIcons"; // Importamos el componente StoreIcons.
import ContactForm from "./ContactForm"; // Importamos el componente ContactForm.

// Definimos el componente funcional Footer.
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal de contacto está abierto.

  const openModal = () => {
    setIsModalOpen(true); // Función para abrir el modal de contacto.
  };

  const closeModal = () => {
    setIsModalOpen(false); // Función para cerrar el modal de contacto.
  };

  return (
    <footer className="footer">
      {" "}
      {/* Contenedor principal del pie de página */}
      <SocialIcons /> {/* Mostramos el componente SocialIcons */}
      <StoreIcons /> {/* Mostramos el componente StoreIcons */}
      <p>
        &copy; {new Date().getFullYear()} Prueba Técnica Grupo Carso. All rights
        reserved.
      </p>{" "}
      {/* Aviso de derechos de autor */}
      <button
        className="contact-button contact-button-right"
        onClick={openModal}
      >
        Contacto
      </button>{" "}
      {/* Botón para abrir el modal de contacto */}
      <ContactForm isModalOpen={isModalOpen} closeModal={closeModal} />{" "}
      {/* Mostramos el componente ContactForm */}
    </footer>
  );
};

export default Footer; // Exportamos el componente Footer.
