'use client'

import { useQuery } from '@apollo/client'
import { AllProductsByCompanyOnlyVisible } from '@lib/graphql/query'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Loading from '../loading'
import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'
export default function Productos() {
  const { loading, error, data, refetch } = useQuery(
    AllProductsByCompanyOnlyVisible,
    {
      variables: { companyId: Number(process.env.NEXT_PUBLIC_COMPANYID) }
    }
  )

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          Error {error.message}
        </p>
      ) : (
        <section className='container max-w-full flex gap-4 flex-wrap'>
          {data?.allProductsByCompanyOnlyVisible.map((product) => (
            <Card key={product.id} as={Link} href={`/producto/${product.id}`}>
              <CardHeader>{product.name}</CardHeader>
              <CardBody className='flex items-center'>
                {product.image && product.image.length > 0 ? (
                  <Image
                    // src={product.image[0]?.link}
                    src={`/api/image?width=400&height=300&name=${encodeURIComponent(
                      product.name
                    )}&url=${encodeURIComponent(product.image[0]?.link || '')}`}
                    fallbackSrc='/loadingImage.webp'
                    alt='Imagen del producto'
                  />
                ) : (
                  <Image
                    as={NextImage}
                    width={150}
                    height={150}
                    alt='No existe Imagen'
                    className='bg-opacity-50'
                    src='/noImage.webp'
                  />
                )}
                <div className=''>
                  {product.price
                    ?.filter((price) => price?.visible && price?.unitPrice > 0)

                    .map((price, index) => (
                      <div key={index}>
                        Precio:
                        <p>
                          ({price?.currency?.name}){' '}
                          {price?.currency?.abbreviation}
                          {price?.unitPrice}
                        </p>
                        <Divider />
                        {price?.bulkPrice != null && price?.bulkPrice > 0 && (
                          <p>
                            Precio por mayor: {price?.currency?.abbreviation}{' '}
                            {price?.bulkPrice} por {price?.bulkQuantity || 0}{' '}
                            unidades
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </section>
      )}
    </>
  )
}
