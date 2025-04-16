import React from 'react';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importa los iconos
import './contacto.css'; // Se importa el archivo de estilos
import NewsMod from '@/modulos/NewsMod';
import Image from 'next/image';

const Contacto = () => {
  return (
    <div>
            <div className="banner-secundario">
              <Image
                src="/Imagenes/Splash/1.jpg"
                width={1500}
                height={800}
                className="hidden md:block"
                alt={'Noticia'}
              />
            </div>
      <div className="contactanos-container">
        <div className="content">
          <button disabled className="info-button">Contáctanos</button>
          <div className="contact-details">
            <h2><FaMapMarkerAlt /> DIRECCIÓN</h2> {/* Icono de ubicación */}
            <p>Av. Ejército de Oriente s/n, Colonia Unidad Cívica 5 de Mayo, Zona de Los Fuertes, C.P. 72270, Puebla, Puebla, México.</p>

            <h2><FaClock /> HORARIO DE ATENCIÓN</h2> {/* Icono de reloj */}
            <p>Lunes a Viernes 10:00-17:00 HRS</p>

            <h2><FaEnvelope /> CORREO ELECTRÓNICO</h2> {/* Icono de correo */}
            <p>Pendiente</p>

            <h2><FaPhone /> NÚMERO DE TELÉFONO</h2> {/* Icono de teléfono */}
            <p>5541660770</p>

            <iframe className='mapa'
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.854285760411!2d-98.18233672440219!3d19.04941144643413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc09c053070a9%3A0x9fd1d0f50ba31b4!2sAv.%20Ej%C3%A9rcito%20de%20Oriente%2C%20Unidad%20C%C3%ADvica%205%20de%20Mayo%2C%2072270%20Puebla%2C%20Pue.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2ses!4v1696512066827!5m2!1ses-419!2ses"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Card de últimas noticias */}
        <NewsMod/>
      </div>
    </div>
  );
};

export default Contacto;
