// Importamos las bibliotecas y los iconos necesarios.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importamos el componente FontAwesomeIcon.
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'; // Importamos los iconos de Google Play y Apple Store desde Font Awesome.

// Definimos el componente funcional StoreIcons.
const StoreIcons = () => {
  return (
    <div className="store-icons"> {/* Contenedor de los iconos de tiendas */}
      <a href="https://play.google.com/store/apps" className="store-icon"> {/* Enlace a Google Play */}
        <FontAwesomeIcon icon={faGooglePlay} /> {/* Mostramos el icono de Google Play */}
      </a>
      <a href="https://www.apple.com/app-store" className="store-icon"> {/* Enlace a Apple Store */}
        <FontAwesomeIcon icon={faApple} /> {/* Mostramos el icono de Apple Store */}
      </a>
    </div>
  );
};

export default StoreIcons; // Exportamos el componente StoreIcons.
