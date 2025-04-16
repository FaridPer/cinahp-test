import ImageServer from '@/blocks/image/Server'
import { ContentBlockServ } from '@/blocks/Content/Server'
import type { Page } from '@/payload-types'
import React, { Fragment } from 'react'



const blockComponents: Record<string, React.FC<any>> = {
  image: ImageServer,
  content: ContentBlockServ
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block



          if (blockType in blockComponents) {
          const Block = blockComponents[blockType as keyof typeof blockComponents]
  

            if (Block) {
              return (
                <div className="block-page" key={index}>
                  <Block id={blockName} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
