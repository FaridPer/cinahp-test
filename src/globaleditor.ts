import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'

export const baseEditorConfig = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    FixedToolbarFeature(), // Agregar la barra de herramientas globalmente
  ],
})
