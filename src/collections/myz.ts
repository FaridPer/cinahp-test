
import type { CollectionConfig } from 'payload'
import { revalidateMuseos, revalidateMuseosDelete } from './hooks/revalidateMyZ'

export const MyZ: CollectionConfig = 
{
    slug:'museos-zona',
    admin: {
      useAsTitle: 'nombre_myz'
    },
    fields:[
      {
        name: 'nombre_myz',
        type: 'text',
      },
      {
        name: 'imagen_myz',
        type: 'upload',
        relationTo: 'media'
      },
      {
        name: 'descripcion_myz',
        type: 'textarea',

      },
      {
        name: 'ubicacion_myz',
        type: 'text',
      },
      {
        name: 'telefono_myz',
        type: 'text',
      },
      {
        name: 'costo_myz',
        type: 'text',
      },
      {
        name: 'url_myz',
        type: 'text'
      }
    ],
    hooks:{
      afterChange: [revalidateMuseos],
      afterDelete: [revalidateMuseosDelete]
    }
    }