// Importamos los estilos CSS y los componentes necesarios.
import "./Home.css"; // Importamos los estilos CSS para el componente.
import UserInfo from "../UserInfo/UserInfo"; // Importamos el componente UserInfo.
import CourseCard from "../CourseCard/CourseCard"; // Importamos el componente CourseCard.
import SearchForm from "../SearchForm/SearchForm"; // Importamos el componente SearchForm.
import Footer from "../Footer/Footer"; // Importamos el componente Footer.
import { generatePDF } from "../../utils/pdf"; // Importamos la función generatePDF desde el archivo utils/pdf.

import useData from "../../hooks/useData"; // Importamos el hook personalizado useData.

// Definimos el componente funcional Home.
const Home = () => {
  // Utilizamos el hook personalizado useData para obtener los datos y estados necesarios.
  const { user, showInscriptions, handleSearchChange, searchTerm } = useData();

  // Si el usuario aún no ha sido cargado, mostramos un mensaje de carga.
  if (!user) return <p>'Cargando....</p>;

  return (
    <div className="home-container">
      {" "}
      {/* Contenedor principal del componente Home */}
      <UserInfo user={user} />{" "}
      {/* Mostramos el componente UserInfo y pasamos los datos del usuario como prop */}
      <SearchForm
        searchTerm={searchTerm} // Pasamos el término de búsqueda como prop.
        handleSearchChange={handleSearchChange} // Pasamos la función de cambio de búsqueda como prop.
      />
      <div className="inscriptions-container">
        {" "}
        {/* Contenedor de las inscripciones */}
        {showInscriptions.map((inscription) => (
          <CourseCard
            key={inscription.courseId} // Clave única para cada CourseCard.
            inscription={inscription} // Pasamos los datos de la inscripción como prop.
            generatePDF={generatePDF} // Pasamos la función generatePDF como prop.
          />
        ))}
      </div>
      <Footer /> {/* Mostramos el componente Footer */}
    </div>
  );
};

export default Home; // Exportamos el componente Home.
