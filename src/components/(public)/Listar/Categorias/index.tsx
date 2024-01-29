'use client'

import { useQuery } from '@apollo/client'
import { AllCategoriesByCompanyOnlyVisible } from '@lib/graphql/query'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Loading from '../loading'

export default function Categorias() {
  const { loading, error, data, refetch } = useQuery(
    AllCategoriesByCompanyOnlyVisible,
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
        <section className='container max-h-full flex sm:flex-col	grid sm:grid-cols-4 space-x-2 space-y-2 mx-auto py-10'>
          {data?.allCategoriesByCompanyOnlyVisible.map((category) => (
            <Card key={category.id}>
              <CardHeader>{category.name}</CardHeader>
              <CardBody className='flex items-center'>
                {category.linkImageCategory?.link ? (
                  <Image
                    as={NextImage}
                    width={150}
                    height={150}
                    src={category.linkImageCategory?.link}
                    fallbackSrc='/loadingImage.webp'
                    alt='Imagen de la categoria'
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
              </CardBody>
            </Card>
          ))}
        </section>
      )}
    </>
  )
}
