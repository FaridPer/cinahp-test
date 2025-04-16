import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube,FaBars } from 'react-icons/fa'; // Importar íconos de Facebook, Twitter, Instagram, YouTube
import { AiFillTwitterCircle } from 'react-icons/ai'; 
import  '@/components/navbar.css' ;  // Se importa el archivo de estilos
import Search from './search';

const Navbar = () => {
    const handleSearch = (event) => {
      if (event.key === 'Enter') {
        const query = event.target.value;
        console.log("Buscando:", query); // Puedes reemplazar con lógica real de búsqueda
      }
    };
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="/inah_h.svg" alt="INAH Puebla Logo" className="logo-img" />
        </div>
        <div className="social-icons" id="iconos">
          <a href="https://www.facebook.com/CentroINAHPuebla/?locale=es_LA" target="_blank" ><FaFacebookF /></a>
          <a href="https://x.com/centroinahpue?lang=es" target="_blank"><AiFillTwitterCircle /></a> {/* Twitter (X) */}
          <a href="https://www.instagram.com/centroinahpuebla/" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/@centroinahpuebla5005" target="_blank"><FaYoutube /></a> {/* YouTube */}
        </div>
      </div>
      <div className="nav-container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars/>
        </label>
        <ul>
          <li><Link href='/'>INICIO</Link></li>
          <li><Link href='/nosotros'>NOSOTROS</Link></li>
          <li><Link href='/museos-zonas'>MUSEOS Y ZONAS</Link></li>
          <li><Link href='/noticias'>NOTICIAS</Link></li>
          <li><link href="/tramites-servicio" /></li>
          <li><Link href='/servicio-practicas'>SERVICIO Y PRÁCTICAS</Link></li>
          <li><Link href='/contacto'>CONTACTO</Link></li>
        </ul>
      </nav>
      <Search></Search>
      </div>
    </header>
  );
}

export default Navbar;
