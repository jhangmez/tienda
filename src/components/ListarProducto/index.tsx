'use client'

import productsData from '@utils/products.json'
import { Badge } from '@nextui-org/badge'
import { Image } from '@nextui-org/react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { useMutation } from '@apollo/client'
import { AllProductsByCompany } from '@lib/graphql/mutation'
import { SortOrder } from '@lib/gql/graphql'
import { Skeleton } from '@nextui-org/skeleton'

export default function ListarProductos() {
  const [
    allProductsByCompany,
    { data: dataProducts, loading: loadingProducts, error: errorProducts }
  ] = useMutation(AllProductsByCompany, {
    variables: {
      CompanyId: 5,
      filter: {
        orderBy: SortOrder.Asc
      }
    }
  })

  if (loadingProducts) {
    return (
      <Card className='w-[200px] space-y-5 p-4' radius='lg'>
        <Skeleton className='rounded-lg'>
          <div className='h-24 rounded-lg bg-default-300'></div>
        </Skeleton>
        <div className='space-y-3'>
          <Skeleton className='w-3/5 rounded-lg'>
            <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-2/5 rounded-lg'>
            <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
          </Skeleton>
        </div>
      </Card>
    )
  }

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-5'>
      {loadingProducts ? (
        <div className='max-w-[300px] w-full flex items-center gap-3'>
          <div>
            <Skeleton className='flex rounded-full w-12 h-12' />
          </div>
        </div>
      ) : errorProducts ? (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          Error {errorProducts.message}
        </p>
      ) : (
        <>
          <p className='text-light-onSurface dark:text-dark-onSurface'>Holaa</p>
          {dataProducts?.allProductsByCompany.map((product, index) => (
            <div key={index}>
              <h2 className='text-light-onSurface dark:text-dark-onSurface'>
                {product.name}
              </h2>
              <p className='text-light-onSurface dark:text-dark-onSurface'>
                Created at: {product.createdAt}
              </p>
              <p className='text-light-onSurface dark:text-dark-onSurface'>
                Prices:
              </p>
              {product?.price?.map((price, priceIndex) => (
                <p
                  key={priceIndex}
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  {price?.unitPrice} {price?.currency?.abbreviation}
                </p>
              ))}
              <p>Images:</p>
              {product?.image?.map((image, imageIndex) => (
                <Image key={imageIndex} src={image?.link} alt={product.name} />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
