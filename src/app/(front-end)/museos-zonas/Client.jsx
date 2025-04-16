'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import './myz.css';
import Image from 'next/image';
import NewsMod from '@/modulos/NewsMod';

const MuseosZonas = ({ myz }) => {
  const [showInfo, setShowInfo] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const searchParams = useSearchParams(); // Obtiene los parámetros de la URL

  useEffect(() => {
    const idFromUrl = searchParams.get('id'); // Lee el parámetro 'id' de la URL
    if (idFromUrl) {
      const index = myz.findIndex(item => item.id.toString() === idFromUrl);
      if (index !== -1) {
        setShowInfo(index); // Abre automáticamente la casilla
      }
    }
  }, [myz, searchParams]);

  const toggleInfo = (index) => {
    setShowInfo(showInfo === index ? null : index);
  };

  const handleImageLoad = (index) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div>
      <div className="banner-secundario">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="Imagen de museo o zona"
        />
      </div>
      <div className="myz-container">
        <div className="content">
          <button disabled className="info-button">
            Conoce nuestros sitios resguardados
          </button>
          {myz && myz.length > 0 ? (
            myz.map((item, index) => (
              <div key={item.id}>
                <h3
                  className="toggle-title"
                  onClick={() => toggleInfo(index)}
                >
                  {index + 1}. {item.nombre_myz}
                </h3>
                {showInfo === index && (
                  <div className="myz-info">
                    {item.imagen_myz && (
                      <div className="image-container">
                        {imageLoading[index] !== false && (
                          <img
                            src="/loading.gif"
                            alt="Cargando..."
                            className="loading-icon"
                          />
                        )}
                        <img
                          src={item.imagen_myz.url}
                          alt={item.nombre_myz}
                          className="img-myz"
                          onLoad={() => handleImageLoad(index)}
                          style={{ display: imageLoading[index] !== false ? 'none' : 'block' }}
                        />
                      </div>
                    )}
                    {item.descripcion_myz && (
                      <p className="descripcion-myz">{item.descripcion_myz}</p>
                    )}
                    {item.ubicacion_myz && (
                      <p><strong>Ubicación:</strong> {item.ubicacion_myz}</p>
                    )}
                    {item.telefono_myz && (
                      <p><strong>Contacto:</strong> {item.telefono_myz}</p>
                    )}
                    {item.costo_myz && (
                      <p><strong>Costo:</strong> {item.costo_myz}</p>
                    )}
                    {item.url_myz && (
                      <p>
                        Conoce más <a target="_blank" href={item.url_myz} rel="noopener noreferrer">aquí</a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No hay sitios disponibles.</p>
          )}
        </div>

        {/* Módulo de noticias */}
        <NewsMod />
      </div>
    </div>
  );
};

export default MuseosZonas;
