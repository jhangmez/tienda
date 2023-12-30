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
