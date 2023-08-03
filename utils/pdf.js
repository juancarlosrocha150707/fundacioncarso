// Importamos la biblioteca 'jsPDF' para generar archivos PDF.
import jsPDF from "jspdf";

// Definimos una función llamada 'generatePDF' que acepta un objeto 'inscription' como parámetro.
export const generatePDF = (inscription) => {
  // Desestructuramos propiedades del objeto 'inscription' para facilitar su acceso.
  const {
    name,
    inscripcionDate,
    certificationDate,
    advance,
    scoreCourse,
    folioCertificate,
  } = inscription;

  // Creamos el contenido del PDF con los detalles de la inscripción.
  const content = `
      ¡Felicitaciones, ${name}!
      
      Te hacemos entrega de esta constancia de reconocimiento por completar con éxito el curso:
      "${inscription.course.name}"
      
      Fecha de inscripción: ${new Date(inscripcionDate).toLocaleDateString()}
      Fecha de certificación: ${new Date(
        certificationDate
      ).toLocaleDateString()}
      Avance: ${advance}%
      Puntaje del curso: ${scoreCourse}
      Folio del certificado: ${folioCertificate}
    `;

  // Creamos una instancia de 'jsPDF' con configuración para tamaño de página 'letter'.
  const pdf = new jsPDF("p", "pt", "letter");
  pdf.setFontSize(12); // Establecemos el tamaño de fuente en 12 puntos.
  pdf.text(40, 40, content); // Agregamos el contenido al PDF en la posición (40, 40).
  pdf.save("constancia_felicitacion.pdf"); // Guardamos el archivo PDF con un nombre específico.
};
