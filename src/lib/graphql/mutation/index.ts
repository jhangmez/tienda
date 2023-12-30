import { gql } from '../../gql'

export const AllProductsByCompany = gql(`
mutation AllProductsByCompany($CompanyId: Int, $filter: ProductFilterInput) {
  allProductsByCompany(companyId: $CompanyId, filter: $filter) {
    id
    name
    createdAt
    price {
      unitPrice
      currency {
        abbreviation
      }
    }
    image {
      link
    }
  }
}
`)
