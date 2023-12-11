'use client'

import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ListarProductos from '@components/ListarProducto'

export default function Home() {
  return (
    <main className='w-screen h-screen '>
      <Header />

      <div className='bg-light-surface dark:bg-dark-surface'>
        <section className='container mx-auto lg:px-16 grid'>
          <ListarProductos />
        </section>
      </div>

      <Footer />
    </main>
  )
}
