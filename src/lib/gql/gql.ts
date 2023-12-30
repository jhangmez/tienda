/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation AllProductsByCompany($CompanyId: Int, $filter: ProductFilterInput) {\n  allProductsByCompany(companyId: $CompanyId, filter: $filter) {\n    id\n    name\n    createdAt\n    price {\n      unitPrice\n      currency {\n        abbreviation\n      }\n    }\n    image {\n      link\n    }\n  }\n}\n": types.AllProductsByCompanyDocument,
    "\nquery AllCategoriesByCompanyOnlyVisible($companyId: Int!) {\n  allCategoriesByCompanyOnlyVisible(companyId: $companyId) {\n    id\n    name\n    linkImageCategory {\n      link\n    }\n  }\n}\n": types.AllCategoriesByCompanyOnlyVisibleDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AllProductsByCompany($CompanyId: Int, $filter: ProductFilterInput) {\n  allProductsByCompany(companyId: $CompanyId, filter: $filter) {\n    id\n    name\n    createdAt\n    price {\n      unitPrice\n      currency {\n        abbreviation\n      }\n    }\n    image {\n      link\n    }\n  }\n}\n"): (typeof documents)["\nmutation AllProductsByCompany($CompanyId: Int, $filter: ProductFilterInput) {\n  allProductsByCompany(companyId: $CompanyId, filter: $filter) {\n    id\n    name\n    createdAt\n    price {\n      unitPrice\n      currency {\n        abbreviation\n      }\n    }\n    image {\n      link\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery AllCategoriesByCompanyOnlyVisible($companyId: Int!) {\n  allCategoriesByCompanyOnlyVisible(companyId: $companyId) {\n    id\n    name\n    linkImageCategory {\n      link\n    }\n  }\n}\n"): (typeof documents)["\nquery AllCategoriesByCompanyOnlyVisible($companyId: Int!) {\n  allCategoriesByCompanyOnlyVisible(companyId: $companyId) {\n    id\n    name\n    linkImageCategory {\n      link\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;