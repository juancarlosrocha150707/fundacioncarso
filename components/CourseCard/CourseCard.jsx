// Importamos la biblioteca React y los estilos CSS para el componente.
import React from 'react';
import './CourseCard.css'; // Importamos los estilos CSS para el componente CourseCard.

// Definimos el componente funcional CourseCard que recibe 'inscription' y 'generatePDF' como props.
const CourseCard = ({ inscription, generatePDF }) => {
  return (
    <div className="card-content"> {/* Contenedor principal de la tarjeta */}
      <div className="course-image" style={{ backgroundColor: inscription.course.sector.colorTheme }}>
        <img src={inscription.course.imageUrl} alt={inscription.course.name} /> {/* Mostramos la imagen del curso */}
      </div>
      <div className="course-info"> {/* Contenedor de la información del curso */}
        <h2>{inscription.course.name}</h2> {/* Título del curso */}
        <p>Fecha de inscripción: {new Date(inscription.inscripcionDate).toLocaleDateString()}</p> {/* Fecha de inscripción */}
        <p>Fecha de certificación: {new Date(inscription.certificationDate).toLocaleDateString()}</p> {/* Fecha de certificación */}
        <div className="progress-bar"> {/* Barra de progreso */}
          <div className="progress-bar-fill" style={{ width: `${inscription.advance}%` }}>
            Avance: {inscription.advance}%
          </div>
        </div>
        <p>Puntaje del curso: {inscription.scoreCourse}</p> {/* Puntaje del curso */}
        <p>Folio del certificado: {inscription.folioCertificate}</p> {/* Folio del certificado */}
        <button className="print-certificate-btn" onClick={() => generatePDF(inscription)}>
          {/* Botón para imprimir el certificado */}
          <i className="fas fa-print"></i> Imprimir Certificado
        </button>
      </div>
    </div>
  );
};

export default CourseCard; // Exportamos el componente CourseCard.
