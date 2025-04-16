'use client';

import React, { useEffect, useState } from 'react';
import { fetchPosts, extractImageFromContent, extractTextFromContent } from '@/app/(front-end)/noticiasposts';
import '@/modulos/newsmod.css';
import { FaNewspaper } from 'react-icons/fa';

const NewsMod = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || 'Error al cargar las noticias.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="news-card-mod">
        <button disabled className="news-button-mod">
          <FaNewspaper /> Últimas Noticias
        </button>
        <div className="news-container-mod">
         <p>Cargando noticias</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-card-mod">
      <button disabled className="news-button-mod">
        <FaNewspaper /> Últimas Noticias
      </button>
        {posts.length > 0 ? (
            <div className="news-container-mod">
              {posts.map((post) => {
                const imageSrc = extractImageFromContent(post.content); // Extraer imagen
                const postText = extractTextFromContent(post.content); // Extraer texto sin formato
                return (
                  <div key={post.id} className="news-item-mod">
                    {/* Mostrar la imagen extraída o una imagen de respaldo si no se encuentra */}
                    <img
                      src={imageSrc || 'Imagenes/Notices/1.jpg'}
                      alt={post.title || 'Noticia'}
                    />
                    <div className="news-content-mod">
                      <h4>{post.title.substring(0, 38)}...</h4> {/* Título del post */}
                      <p>{postText.substring(0, 55)}...</p> {/* Extracto del texto */}
                      <a href={`/noticias/${post.id}`} className="read-more-mod">
                        Leer más
                      </a> {/* Enlace a la publicación completa */}
                    </div>
                  </div>
                );
              })}
            </div>
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}  
    </div>
  );
};

export default NewsMod;
