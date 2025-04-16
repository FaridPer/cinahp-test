import { Image } from "@/blocks/image/schema";
import { ContentBlock } from "@/blocks/Content/schema";
import { CollectionConfig } from "payload";
import { revalidatePage, revalidateDelete } from "./hooks/revalidatePage";

export const Pages: CollectionConfig = { 
    slug: 'pages',
    labels: {
        singular: 'Página',
        plural: 'Páginas',
    },
    admin: {
        useAsTitle: 'name'
      },
    fields: [
        {
            name: 'name',
            label: 'Título(SEO)',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Descripción(SEO)',
            type: 'textarea',
            required: true,
        },
        {
            name: 'slug',
            label: 'Nombre del enlace',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            required: true
        },
        {
            name: 'Banner',
            label: 'Banner',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'Title',
            label: 'Etiqueta',
            type: 'text',
            required: true
        },
        
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks:[
                ContentBlock,
                Image
            ]
        }
    ],
    hooks: {
        afterChange: [revalidatePage],
        afterDelete: [revalidateDelete],
     },
}