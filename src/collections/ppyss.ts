
import type { CollectionConfig } from 'payload'
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
  FixedToolbarFeature
} from '@payloadcms/richtext-lexical'
import { revalidatePracticas, revalidatePracticasDelete } from './hooks/revalidatePPySS'


export const practicas: CollectionConfig = 
{
    slug:'practicas-servicio',
    admin: {
      useAsTitle: 'nombre_programa'
    },
    fields:[
      {
        name: 'nombre_programa',
        type: 'text',
      },
      {
        name: 'num_programa',
        type: 'text',
      },
      {
        name: 'descripcion_programa',
        type: 'textarea',
      },
      {
        name: 'coord_programa',
        type: 'text',
      },
      {
        name: 'telefono_coord',
        type: 'text',
      },
      {
        name: 'correo_coord',
        type: 'text'
      },
      {
        name: 'perfil_educativo',
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
      lexicalHTML('perfil_educativo', { name: 'perfil_educativo_html' }),
    ],
    hooks:{
      afterChange: [revalidatePracticas],  // Aquí registras el hook de actualización
      afterDelete: [revalidatePracticasDelete]  // Y este para la eliminación
    }
    }