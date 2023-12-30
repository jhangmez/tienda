import { gql } from '../../gql'

export const Myself = gql(/* GraphQL */ `
  query Me {
    me {
      id
      name
      profile {
        id
        bio
      }
    }
  }
`)

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
