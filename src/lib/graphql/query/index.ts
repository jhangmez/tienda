import { gql } from '../../gql'

export const AllCategoriesByCompanyOnlyVisible = gql(`
query AllCategoriesByCompanyOnlyVisible($companyId: Int!) {
  allCategoriesByCompanyOnlyVisible(companyId: $companyId) {
    id
    name
    linkImageCategory {
      link
    }
  }
}
`)

export const AllProductsByCompanyOnlyVisible = gql(`
query AllProductsByCompanyOnlyVisible($companyId: Int!) {
  allProductsByCompanyOnlyVisible(companyId: $companyId) {
name
    SKU
    UPC
    id
    image {
      link
      id
    }
    price {
      unitPrice
      onSale
      visible
      currency {
        abbreviation
      }
      id
    }
  }
}`)
