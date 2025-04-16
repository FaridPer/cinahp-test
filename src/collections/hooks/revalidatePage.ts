import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '@/payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
    doc,
    previousDoc,
    req: { payload, context },
  }) => {
    if (!context.disableRevalidate) {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
      payload.logger.info(`Revalidando página en la ruta: ${path}`)
  
      revalidatePath(path)
      revalidateTag('pages-sitemap')
  
      // Si la página tenía un slug anterior diferente, también revalidarlo
      if (previousDoc && previousDoc.slug !== doc.slug) {
        const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
        payload.logger.info(`Revalidando ruta anterior: ${oldPath}`)
        revalidatePath(oldPath)
        revalidateTag('pages-sitemap')
      }
    }
    return doc
  }
  

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('pages-sitemap')
  }

  return doc
}

