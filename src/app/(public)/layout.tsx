import Header from '@components/Header'
import Footer from '@components/Footer'
import { Suspense } from 'react'
import Loading from '../loading'

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </main>
  )
}
