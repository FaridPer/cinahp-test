import './myz.css';
import NewsMod from '@/modulos/NewsMod';
import Image from 'next/image';

const FallbackPage = () => {


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
            Cargando...
          </button>
          <div><p>Cargando...</p></div>
        </div>

        {/* Módulo de noticias */}
        <NewsMod />
      </div>
    </div>
  );
};

export default FallbackPage;
