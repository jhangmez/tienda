'use client'

import Swiper from '@components/Swiper'
import Carousel from '@components/Carousel'
import productsData from './products.json'
import { notFound } from 'next/navigation'

export default function Producto({ slug }: { slug: string }) {
  const id = slug
  const producto = productsData.find((product) => product.id === id)
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

  // Si el producto no existe, se retorna un error 404.
  if (!producto) {
    return notFound()
  }

  return (
    <div className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col lg:flex-row justify-center px-6 lg:px-0  gap-5'>
        <Swiper items={items} />
        <div className='text-light-onSurface dark:text-dark-onSurface'>
          <div>Id del producto: {producto?.id}</div>

          <h1>{producto?.nombre}</h1>
          <p>Fabricante: {producto?.fabricante}</p>
          <p>Stock: {producto?.stock}</p>
          <p>Precio en dólares: {producto?.preciodolares}</p>
          <p>Precio en soles: {producto?.preciosoles}</p>
          <p>Descripción: {producto?.descripcion}</p>
          <p>Descuento: {producto?.descuento}</p>
        </div>
      </div>
    </div>
  )
}
