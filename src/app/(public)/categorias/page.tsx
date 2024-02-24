import type { Metadata } from 'next'
import Listar from '@components/(public)/Listar'

const title = 'ronaltienda | Categorias'
const description = 'Categorias'

export const metadata: Metadata = {
  title,
  description
}
export default function Categorias() {
  return (
    <>
      <Listar type='categorias' />
    </>
  )
}
