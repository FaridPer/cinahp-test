// storage-adapter-import-placeholder
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { baseEditorConfig } from './globaleditor'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { practicas } from './collections/ppyss'
import { MyZ } from './collections/myz'
import { Fuentes } from './globals/fuentes'
import { Pages } from './collections/Pages'
import { Header } from './globals/header'
import { Footer } from './globals/footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, practicas, MyZ, Pages],
  globals: [Fuentes, Header, Footer],
  editor: baseEditorConfig,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        payment: false,
      },
    }),
    vercelBlobStorage({
      enabled: true, // Opcional, por defecto es true
      collections: {
        media: true, // Especifica que esta colección usará Vercel Blob Storage
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, // Asegúrate de tener esta variable en tu entorno
    }),
  ],
  csrf: ['http://localhost:3000', 'https://payloadinah.vercel.app'],
  cors: ['http://localhost:3000', 'https://payloadinah.vercel.app'],
})
