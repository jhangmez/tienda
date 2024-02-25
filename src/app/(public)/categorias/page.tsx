import type { Metadata } from 'next'
import Listar from '@components/(public)/Listar'

const shortTitle = 'Categorias'
const description = 'Visita todas las categorias'
const tienda = ' | ronalTienda'
const title = `${shortTitle}${tienda}`
const url = 'https://gamarra.vercel.app'
const imageUrl = `${url}/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}
export default function Categorias() {
  return (
    <>
      <Listar type='categorias' />
    </>
  )
}
