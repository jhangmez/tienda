'use client'

import { useQuery } from '@apollo/client'
import { AllCategoriesByCompanyOnlyVisible } from '@lib/graphql/query'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

export default function Categorias() {
  const { loading, error, data, refetch } = useQuery(
    AllCategoriesByCompanyOnlyVisible,
    {
      variables: { companyId: Number(process.env.NEXT_PUBLIC_COMPANYID) }
    }
  )
  return (
    <section className='container flex sm:flex-col	grid sm:grid-cols-4 space-x-2 space-y-2 mx-auto py-10'>
      {data?.allCategoriesByCompanyOnlyVisible.map((category) => (
        <Card key={category.id}>
          <CardHeader>{category.name}</CardHeader>
          <CardBody className='flex items-center'>
            <Image
              as={NextImage}
              width={150}
              height={150}
              src={category.linkImageCategory?.link}
              alt='Imagen de la categoria'
            />
          </CardBody>
        </Card>
      ))}
    </section>
  )
}
