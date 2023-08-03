// Importamos los hooks 'useState' y 'useEffect' de React, así como la función 'fetchData' desde el archivo 'api'.
import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

// Definimos un hook personalizado llamado 'useData'.
const useData = () => {
  // Definimos los estados iniciales usando el hook 'useState'.
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario.
  const [inscriptions, setInscriptions] = useState(null); // Estado para almacenar las inscripciones.
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda.

  // Función para manejar cambios en el término de búsqueda.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Función para filtrar las inscripciones en función del término de búsqueda.
  const handleFilter = () => !searchTerm
    ? inscriptions // Si no hay término de búsqueda, devolvemos todas las inscripciones.
    : inscriptions.filter(inscription => inscription.course.name.toLowerCase().includes(searchTerm));

  // Propiedad computada que contiene las inscripciones filtradas.
  const showInscriptions = handleFilter();

  // Efecto secundario para cargar los datos cuando el componente se monta.
  useEffect(() => {
    // Utilizamos la función 'fetchData' para obtener los datos de la API.
    fetchData().then(data => {
      // Actualizamos los estados 'user' e 'inscriptions' con los datos obtenidos.
      setUser(data.user);
      setInscriptions(data.inscriptions);
    });
  }, []); // El segundo argumento del 'useEffect' es un arreglo vacío para que se ejecute solo una vez.

  // Devolvemos un objeto con los estados y funciones que queremos usar fuera del hook.
  return { user, handleSearchChange, searchTerm, showInscriptions };
}

// Exportamos el hook personalizado 'useData'.
export default useData;
