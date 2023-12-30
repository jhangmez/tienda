import Header from '@components/Header'
import Footer from '@components/Footer'
import type { Metadata } from 'next'
import Listar from '@components/(public)/Listar'

const title = 'jhangmez | Skills'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
}
export default function Categorias() {
  return (
    <main className='w-screen h-screen'>
      <div className='bg-light-surface dark:bg-dark-surface '>
        <Header />
      </div>
      <Listar type='categorias' />
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
