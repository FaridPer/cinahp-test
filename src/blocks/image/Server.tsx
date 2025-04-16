import React from 'react'
import Image from 'next/image'

export default function ImageServer({image}:{image:{url:string, alt:string}}) {
  return (
    <div>
        <Image src={image.url} alt={image.alt} 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
        />
    </div>
  )
}
