import Link from 'next/link';
import React from 'react';
import { fetchPosts, extractImageFromContent, extractTextFromContent } from '@/app/(front-end)/noticiasposts';
import '@/app/(front-end)/noticias/noticias.css';
import Image from 'next/image';

const Noticias = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <div className="banner-secundario">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      {posts.length > 0 ? (
        <div className="news-container">
          <button disabled className="info-button">Descubre el pasado con nosotros</button>
          {posts.map((post) => {
            const imageSrc = extractImageFromContent(post.content);
            const postText = extractTextFromContent(post.content);
            return (
              <div key={post.id} className="news-item">
                <img
                  src={imageSrc || ''}
                  alt={post.title || 'Noticia'}
                />
                <div className="news-content">
                  <h4>{post.title}</h4>
                  <p>
                    {postText.substring(0, 500)} ...{' '}
                    <Link href={`/noticias/${post.id}`} className='read-more'>
                      Leer más
                    </Link>
                  </p>
                  <p>
                    <strong>Publicado el:</strong>{' '}
                    {new Date(post.published).toLocaleDateString()}
                  </p>
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

export default Noticias;
