'use client';
import  '@/components/navbar.css'

export default function Search() {
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
          const query = event.target.value;
          console.log("Buscando:", query); // Puedes reemplazar con lógica real de búsqueda
        }
      };
  return (
    <nav className="search-nav">
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
            onKeyDown={handleSearch}
          />
    </nav>
  )
}
