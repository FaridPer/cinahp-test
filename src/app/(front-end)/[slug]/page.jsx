import config from '@payload-config'
import React, { cache } from 'react'
import { getPayload } from 'payload'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import NewsMod from '@/modulos/NewsMod'

import { RenderBlocks } from '@/utils/RenderBlocks'

const queryPageBySlug = cache(async ({ slug }) => {
  const parsedSlug = decodeURIComponent(slug)
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })
  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })

  return pages.docs
    ?.filter((doc) => doc.slug !== 'index')
    .map(({ slug }) => ({ slug })) // <- Devuelve objetos en lugar de strings
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug ?? 'index'
  const page = await queryPageBySlug({ slug })

  if (!page) {
    return {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe.',
    }
  }

  return {
    title: page['name'] || '',
    description: page['description'] || '',
    openGraph: {
      title: page['name'] || 'Título por defecto',
      description: page['description'] || '',
    },
  }
}

export default async function Page({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug ?? 'index'

  const page = await queryPageBySlug({ slug })

  if (!page) {
    return notFound()
  }

  // Asegúrate de extraer los campos correctos de page
  const { Banner, Title: tituloPagina, layout } = page
  const layoutArray = Array.isArray(layout) ? layout : []

  return (
    <article>
      {/* Mostrar el Banner solo si está presente */}
      {Banner && (
        <div>
          <div className="banner-secundario">
            <Image
              src={typeof Banner === 'object' && 'url' in Banner && Banner.url ? Banner.url : '/Imagenes/Splash/1.jpg'}
              alt={typeof Banner === 'object' && 'alt' in Banner && Banner.alt ? Banner.alt : ''}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
            />
          </div>
          <div className="titulo-pag">
            <button disabled className="info-button">{tituloPagina}</button>
          </div>
        </div>
      )}
      <div className="page-container">
        <div className="content">
          <RenderBlocks blocks={layoutArray} />
        </div>
        <NewsMod />
      </div>
    </article>
  )
}
