'use client'

import { Spinner } from '@nextui-org/react'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='min-w-screen min-h-screen'>
      <div className='flex flex-col justify-center items-center h-screen bg-dark-surface'>
        <section className='w-fit h-14 justify-start items-center gap-[5px] inline-flex text-dark-primary'>
          ronalTienda
        </section>
        <div className='container flex flex-col items-center'>
          <Spinner color='secondary' />
          <p className='text-light-onBackground dark:text-dark-onBackground mt-4'>
            Cargando página...
          </p>
        </div>
      </div>
    </main>
  )
}
