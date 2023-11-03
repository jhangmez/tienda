'use client'

import Swiper from '@components/Swiper'
import Carousel from '@components/Carousel'

export default function Producto() {
  const items = [
    {
      imageSrc:
        'https://lh3.googleusercontent.com/drive-viewer/AK7aPaCLV0gsJQeDFg3ZcYiAqrr6vD4-vi_yT2RYkQuRU4ZX4LXq7MuhMPkkUgzPXUszIZFEo7mlXnxIc4PVT5Wt2mm__tP64g',
      imageAlt: 'Its etica'
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/drive-viewer/AK7aPaBcgUDgS-kom2ltfYzgtpPRIYSGJbYUmv75QnwSxfJIEFc9CLaYYP6xkP-3Q3PPSwHeWOcyx0IlURVESx5P71KNp_Fr',
      imageAlt: 'A rock little cat'
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/drive-viewer/AK7aPaDCWtPeUiYgnPEYTgVXO9zjHB5tUgoirWdPl2b3olaCEcYlo2MbMpkU0Vs3htE8MJqWuZuAqG_auWcFufFTCB-FSY3e',
      imageAlt: 'A woman doctor'
    }
  ]
  const images = [
    'https://lh3.googleusercontent.com/drive-viewer/AK7aPaCLV0gsJQeDFg3ZcYiAqrr6vD4-vi_yT2RYkQuRU4ZX4LXq7MuhMPkkUgzPXUszIZFEo7mlXnxIc4PVT5Wt2mm__tP64g',
    'https://lh3.googleusercontent.com/drive-viewer/AK7aPaBcgUDgS-kom2ltfYzgtpPRIYSGJbYUmv75QnwSxfJIEFc9CLaYYP6xkP-3Q3PPSwHeWOcyx0IlURVESx5P71KNp_Fr',
    'https://lh3.googleusercontent.com/drive-viewer/AK7aPaDCWtPeUiYgnPEYTgVXO9zjHB5tUgoirWdPl2b3olaCEcYlo2MbMpkU0Vs3htE8MJqWuZuAqG_auWcFufFTCB-FSY3e'
  ]

  return (
    <div className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col justify-center px-3 lg:px-0'>
        <div className='container'>
          <Swiper items={items} />
          <Carousel images={images} />
        </div>
      </div>
    </div>
  )
}
