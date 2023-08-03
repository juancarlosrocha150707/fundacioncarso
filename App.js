// Importamos la biblioteca 'react' para poder usarla en nuestro componente.
import React from "react";

// Importamos el componente 'Home' desde la ruta relativa "./components/Home/Home".
import Home from "./components/Home/Home";

// Definimos el componente funcional 'App'.
const App = () => {
  // Devolvemos JSX que representa la estructura del componente 'App'.
  // Contiene un contenedor con la clase CSS 'app-container' que engloba el componente 'Home'.
  return (
    <div className="app-container">
      <Home /> {/* Renderizamos el componente 'Home' dentro del contenedor. */}
    </div>
  );
};

// Exportamos el componente 'App' para poder usarlo en otros archivos.
export default App;
