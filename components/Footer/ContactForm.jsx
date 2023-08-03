// Importamos la biblioteca React para definir el componente.
import React from "react";

// Definimos el componente funcional ContactForm que recibe 'isModalOpen' y 'closeModal' como props.
const ContactForm = ({ isModalOpen, closeModal }) => {
  // Si el modal no está abierto, no renderizamos nada.
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      {" "}
      {/* Capa de fondo oscuro */}
      <div className="modal">
        {" "}
        {/* Contenedor principal del modal */}
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>{" "}
        {/* Botón de cierre del modal (icono 'X') */}
        <h2>Formulario de Contacto</h2> {/* Título del formulario */}
        <form>
          {" "}
          {/* Formulario de contacto */}
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />{" "}
          {/* Campo para el nombre del usuario */}
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />{" "}
          {/* Campo para el correo electrónico del usuario */}
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4"></textarea>{" "}
          {/* Área de texto para el mensaje */}
          <button type="submit">Enviar</button>{" "}
          {/* Botón de envío del formulario */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm; // Exportamos el componente ContactForm.
