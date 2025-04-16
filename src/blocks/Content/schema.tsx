import { Block } from "payload";
import {
    HTMLConverterFeature,
    lexicalEditor,
    lexicalHTML,
    FixedToolbarFeature
  } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
    slug: 'content',
    fields: [
        {
            name: 'content',
            label: 'content',
            type: 'richText',
            required: true,
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
        lexicalHTML('content', {name:'content_html'})
    ]
}