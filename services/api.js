// Definimos la URL de la API de la que vamos a obtener los datos.
const url = "https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport";

// Definimos una función asincrónica llamada 'fetchData' para obtener datos de la API.
export const fetchData = async () => {
  try {
    // Realizamos una solicitud de datos a la URL utilizando el método 'fetch'.
    const response = await fetch(url);
    
    // Si la respuesta no es exitosa, lanzamos un error.
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    
    // Convertimos la respuesta en formato JSON.
    const jsonData = await response.json();

    // Creamos un objeto 'user' para almacenar en un estado.
    const user = {
      email: jsonData.email,
      name: jsonData.people[0].name,
      lastName: jsonData.people[0].lastName,
    }

    // Filtramos las inscripciones para obtener aquellas con un avance del 100%.
    const inscriptions = jsonData.inscriptions.filter(inscription => inscription.advance === 100)

    // Devolvemos un objeto que contiene el usuario y las inscripciones filtradas.
    return {user, inscriptions}

  } catch (error) {
    // En caso de error, mostramos un mensaje de error en la consola.
    console.error("Error en la solicitud:", error);
  }
};
