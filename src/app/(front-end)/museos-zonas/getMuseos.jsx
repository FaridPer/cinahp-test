import { getPayload } from 'payload';
import config from '@payload-config';
import MuseosZonas from './Client';
import Carousel from '@/components/carousel';

// 🔹 Función para obtener todos los datos de la API
async function fetchMuseosData() {
  const payload = await getPayload({ config });
  const data = await payload.find({ 
    collection: 'museos-zona',
    limit: 100,
    sort: 'id',
  });
  return data.docs;
}

// 🔹 Función para obtener solo las imágenes
async function fetchMuseosImages() {
  const docs = await fetchMuseosData();
  return docs
    .filter(item => item.imagen_myz && item.imagen_myz.url)
    .map(item => item.imagen_myz.url);
}

export async function MuseosCarouselAPI() {
  const images = await fetchMuseosImages(); // Obtiene las imágenes desde el servidor
  return <Carousel images={images} />;
}

// 🔹 Componente que obtiene los datos y los pasa a `MuseosZonas`
export async function MuseosAPI() {
  const myz = await fetchMuseosData();
  return <MuseosZonas myz={myz} />;
}

