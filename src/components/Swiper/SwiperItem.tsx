import React from 'react'

import Image from 'next/image'
import { SwiperItemType } from '@typescustom/swipertypes'

import './SwiperItem.css'
export type Props = SwiperItemType

function SwiperItem({ imageSrc, imageAlt }: SwiperItemType) {
  return (
    <li className='swiper-item'>
      {/* <img src={imageSrc} alt={imageAlt} className='swiper-img' /> */}
      <Image
        src={`${imageSrc}`}
        alt={imageAlt}
        className='swiper-img'
        width={500}
        height={500}
        draggable={false}
      />
    </li>
  )
}

export default SwiperItem
