import {
    HTMLConverterFeature,
    lexicalEditor,
    lexicalHTML,
    FixedToolbarFeature
  } from '@payloadcms/richtext-lexical'

import type { CollectionConfig } from 'payload'

export const pagina: CollectionConfig = 
{
    slug:'pagina',
    admin: {
      useAsTitle: 'titulo_pagina'
    },
    fields:[
      {
        name: 'titulo_pagina',
        type: 'text',
      },
      {
        name: 'contenido',
        type: 'richText',
        editor: lexicalEditor({
          features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            FixedToolbarFeature(),
            // The HTMLConverter Feature is the feature which manages the HTML serializers.
            // If you do not pass any arguments to it, it will use the default serializers.
            HTMLConverterFeature({}),
          ],
        }),
      },
      lexicalHTML('contenido', { name: 'contenido_html' }),
    ]
    }