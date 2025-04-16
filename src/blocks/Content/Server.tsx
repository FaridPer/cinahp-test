import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

export const ContentBlockServ = ({ content }: { content: SerializedEditorState }) => {
  return <RichText data={content} />;
};
