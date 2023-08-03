// Importamos la biblioteca React y los estilos CSS para el componente.
import React from 'react';
import './SearchForm.css';

// Definimos el componente funcional SearchForm que recibe 'searchTerm' y 'handleSearchChange' como props.
const SearchForm = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="search-container"> {/* Contenedor principal del formulario de búsqueda */}
      <input
        className="search-input" // Clase CSS para el input de búsqueda.
        type="text"
        placeholder="Buscar curso por nombre..." // Placeholder del input.
        value={searchTerm} // Valor del input, vinculado a la prop 'searchTerm'.
        onChange={handleSearchChange} // Manejador del cambio en el input de búsqueda.
      />
    </div>
  );
};

export default SearchForm; // Exportamos el componente SearchForm.
