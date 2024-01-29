import { Spinner } from '@nextui-org/spinner'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <p className='mb-4 self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
        Harkay
        <span className='text-2xl text-[0.8em] font-normal dark:text-white'>
          {' '}
          S O F T
        </span>
      </p>
      <Spinner color='primary' />
      <p className='mt-4 text-light-onBackground dark:text-dark-onBackground'>
        Cargando sección...
      </p>
    </section>
  )
}
