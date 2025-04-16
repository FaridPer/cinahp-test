import { GlobalConfig } from "payload";
import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
    slug: 'footer',
    label: 'Pie de página',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'secundary-logo',
            label: 'Logo secundario',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'nav',
            label: 'Enlaces:',
            labels:{
                plural: 'enlaces',
                singular: 'enlace'
            },
            type: 'array',
            fields:[
                {
                    name: 'label',
                    label: 'etiqueta',
                    type: 'text'
                },
                {
                    name: 'link',
                    label: 'enlace',
                    type: 'text'
                }
            ]
        }
    ],
    hooks: {
        afterChange: [revalidateFooter],
    }
}