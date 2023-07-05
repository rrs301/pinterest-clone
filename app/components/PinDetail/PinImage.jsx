import Image from 'next/image'
import React from 'react'

function PinImage({pinDetail}) {

  return (
    <div>
      <Image src={pinDetail.image}
      alt={pinDetail.title}
      width={1000}
      height={1000}
    
      className='rounded-2xl'
      />

    </div>
  )
}

export default PinImage