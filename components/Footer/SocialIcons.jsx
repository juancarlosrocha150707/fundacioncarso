// Importamos las bibliotecas y los iconos necesarios.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importamos el componente FontAwesomeIcon.
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importamos los iconos de redes sociales desde Font Awesome.

// Definimos el componente funcional SocialIcons.
const SocialIcons = () => {
  return (
    <div className="social-icons"> {/* Contenedor de los iconos de redes sociales */}
      <a href="https://www.facebook.com" className="social-icon"> {/* Enlace a Facebook */}
        <FontAwesomeIcon icon={faFacebook} /> {/* Mostramos el icono de Facebook */}
      </a>
      <a href="https://www.twitter.com" className="social-icon"> {/* Enlace a Twitter */}
        <FontAwesomeIcon icon={faTwitter} /> {/* Mostramos el icono de Twitter */}
      </a>
      <a href="https://www.instagram.com" className="social-icon"> {/* Enlace a Instagram */}
        <FontAwesomeIcon icon={faInstagram} /> {/* Mostramos el icono de Instagram */}
      </a>
    </div>
  );
};

export default SocialIcons; // Exportamos el componente SocialIcons.
