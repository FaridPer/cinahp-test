import { GlobalConfig } from "payload";
import { revalidateHeader } from "./hooks/revalidateHeader";

export const Header: GlobalConfig = {
    slug: 'header',
    label: 'Menú',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true
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
            ],
            minRows: 1,
            maxRows: 7
        }
    ],
    hooks: {
        afterChange: [revalidateHeader],
    },
}