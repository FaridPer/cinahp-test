import { getPayload } from 'payload'
import config from '@payload-config'
import Link from "next/link";

export default async function MZFront() {
  const payload = await getPayload({ config });
  const data = await payload.find({ 
    collection: 'museos-zona',
    limit: 4, 
    sort: 'id', 
  });
  const myz = data.docs.slice(1, 4); // Solo mostramos 3 de los primeros 10

  return (
    
    <div className="sitsect-cont">
      <div><p>Descubre la riqueza de nuestra herencia cultural a través de los museos, zonas arqueológicas y galerías que preservan las maravillas de nuestro pasado.</p></div>
      <div className="sitsect-box-container">
        {myz.map((item) => (
          <div className="sitsect-box" key={item.id}>
            <img src={item.imagen_myz?.url || null} alt={item.nombre_myz} />
            <h3><Link href={`/museos-zonas?id=${item.id}`}> {item.nombre_myz}</Link></h3>
          </div>
        ))}
      </div>
    </div>
  );
}
