'use client';
import React, { useState } from 'react';
import './syp.css';
import Image from 'next/image';
import FormComponent from './form.jsx';

const ServicioPracticas = ({ programas }) => {
  const [showProgramInfo, setShowProgramInfo] = useState(null);

  const toggleProgramInfo = (programName) => {
    setShowProgramInfo(showProgramInfo === programName ? null : programName);
  };

  return (
    <div>
      <div className="banner-secundario">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={1500}
          height={800}
          className="hidden md:block"
          alt="Noticia"
        />
      </div>
      <div className="syp-container">
        <div className="content">
          <button disabled className="info-button-sp">
            ¿Te gustaría realizar tu SS o PP con nosotros?
          </button>
          <div className="program-title">PROGRAMAS DE SERVICIO SOCIAL</div>

          <div className="program-details">
            {programas && programas.length > 0 ? (
              programas.map((program) => (
                <div key={program.num_programa}>
                  <div
                    className="program-link"
                    onClick={() => toggleProgramInfo(program.nombre_programa)}
                  >
                    ♦ <span className="program-name">{program.nombre_programa}</span>
                  </div>
                  {showProgramInfo === program.nombre_programa && (
                    <div className="program-info">
                      <p>{program.descripcion_programa}</p>
                      <p>
                        <strong>Coordinador del Programa:</strong> {program.coord_programa}
                        <br />
                        <strong>Correo electrónico:</strong> {program.correo_coord}
                        <br />
                        <strong>Número de contacto:</strong> {program.telefono_coord}
                      </p>
                      <strong>Perfil educativo solicitado:</strong>
                      <p dangerouslySetInnerHTML={{ __html: program.perfil_educativo_html }}></p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No hay programas disponibles.</p>
            )}
          </div>
        </div>

        {/* Card de últimas noticias */}
        <div className="card-container">
          <div className="program-info">
            <p>¿TE GUSTARÍA REALIZAR TU SERVICIO SOCIAL O PRÁCTICAS PROFESIONALES CON NOSOTROS?</p>
            <p>¡Conoce los distintos programas que tenemos para ti dependiendo tu tipo de carrera!</p>
            <p>Solo necesitas darnos tus datos y nos contactaremos contigo.</p>
          </div>
          <br />
          <FormComponent />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default ServicioPracticas;
