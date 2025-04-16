'use client';

import React, { useEffect, useState } from 'react';
import { fetchPosts, extractImageFromContent, extractTextFromContent } from '@/app/(front-end)/noticiasposts';
import '@/modulos/newsmod.css';
import style from './apinoticias.module.css';


const ApiNoticias = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Cargando noticias...</p>;
  }

  if (error) {
    return <p>Error al cargar las noticias: {error.message}</p>;
  }

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          <div className={style['news-container']}>
            {posts.map((post) => {
              const imageSrc = extractImageFromContent(post.content); // Extraer imagen
              const postText = extractTextFromContent(post.content); // Extraer texto sin formato
              return (
                <div key={post.id} className={style['news-item']}>
                  {/* Mostrar la imagen extraída o una imagen de respaldo si no se encuentra */}
                  <img src={imageSrc || 'Imagenes/Notices/1.jpg'} alt={post.title || 'Noticia'} />
                  <div className={style['news-content']}>
                    <h4>{post.title}</h4> {/* Título del post */}
                    <p>{postText.substring(0, 100)}...</p> {/* Extracto del texto */}
                    <p><strong>Publicado el:</strong> {new Date(post.published).toLocaleDateString()}</p> {/* Fecha de publicación */}
                    <a href={`/noticias/${post.id}`} className={style['read-more']}>Leer más</a> {/* Enlace a la publicación completa */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
  );
};

export default ApiNoticias;
