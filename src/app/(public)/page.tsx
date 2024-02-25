'use client'

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import Listar from '@components/(public)/Listar'

export default function Home() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px]'>
        <p className='text-light-onPrimary font-bold '>Ronal tienda</p>
        <Button as={Link} color='primary' href='/categorias'>
          Ir a categorias
        </Button>
        <Listar type='productos' />
      </div>
    </section>
  )
}
