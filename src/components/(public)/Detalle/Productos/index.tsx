'use client'

import { useQuery } from '@apollo/client'
import { GetProductByIdAndCompanyId } from '@lib/graphql/query'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Loading from '../loading'
import Link from 'next/link'
export default function Productos({ slug }: { slug: number }) {
  const { loading, error, data, refetch } = useQuery(
    GetProductByIdAndCompanyId,
    {
      variables: {
        companyId: Number(process.env.NEXT_PUBLIC_COMPANYID),
        id: slug
      }
    }
  )

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          {error.message && 'No existe el producto'}
        </p>
      ) : (
        <section className='container mx-auto py-5 lg:px-8 md:px-5 px-3 space-y-2'>
          <p className='text-light-primary dark:text-dark-primary'>
            {data?.getProductByIdAndCompanyId?.name}
          </p>
          <p className='text-light-primary dark:text-dark-primary'>
            {data?.getProductByIdAndCompanyId?.UPC}
          </p>
          <div className='space-y-3 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
            {data?.getProductByIdAndCompanyId?.image?.map((img, index) => (
              <Image
                key={index}
                src={`/api/image?width=400&height=250&name=${encodeURIComponent(
                  data?.getProductByIdAndCompanyId?.name || ''
                )}&url=${encodeURIComponent(img?.link || '')}`}
                fallbackSrc='/loadingImage.webp'
                alt={`Imagen del producto ${index + 1}`}
                className='w-full h-auto'
              />
            ))}
          </div>
          <div className='space-y-3 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
            {data?.getProductByIdAndCompanyId?.price
              ?.filter((price) => price?.visible && price?.unitPrice > 0)
              .map((price, index) => (
                <div key={index}>
                  <p>
                    Precio: {price?.unitPrice} {price?.currency?.abbreviation}
                  </p>
                  {price?.onSale && <p>En venta</p>}
                  {price?.bulkPrice != null && price?.bulkPrice > 0 && (
                    <p>
                      Precio por mayor: {price?.bulkPrice}{' '}
                      {price?.currency?.abbreviation} por{' '}
                      {price?.bulkQuantity || 0} unidades
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  )
}
