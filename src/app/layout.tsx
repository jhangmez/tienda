import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'
import Loading from './loading'

const myFont = localFont({ src: './LexendDeca-VariableFont_wght.ttf' })

const tienda = ' | ronalTienda'
const title = `Tienda virtual${tienda}`
const description = 'Bienvenidos a Tienda virtual de ronal'
const url = 'https://gamarra.vercel.app'
const imageUrl = `${url}/api/og?title=Tienda virtual&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: url,
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${myFont.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Providers>
          <Toaster />
          <noscript>Página realizada por @jhangmez de HarkaySoft</noscript>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
