/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Category = {
  __typename?: 'Category';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  linkImageCategory?: Maybe<LinkImageCategory>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  subcategory?: Maybe<Array<Maybe<Category>>>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type Company = {
  __typename?: 'Company';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  suscription?: Maybe<Suscription>;
};

export type CompanyName = {
  __typename?: 'CompanyName';
  name: Scalars['String']['output'];
};

export type ContentProduct = {
  __typename?: 'ContentProduct';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  typeContentProduct?: Maybe<TypeContentProduct>;
};

export type Currency = {
  __typename?: 'Currency';
  abbreviation: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type LinkImageCategory = {
  __typename?: 'LinkImageCategory';
  category?: Maybe<Category>;
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  namefile: Scalars['String']['output'];
  typefile?: Maybe<Scalars['String']['output']>;
};

export type LinkImageList = {
  __typename?: 'LinkImageList';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  list?: Maybe<List>;
  namefile: Scalars['String']['output'];
  typefile?: Maybe<Scalars['String']['output']>;
};

export type LinkImageProduct = {
  __typename?: 'LinkImageProduct';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  namefile: Scalars['String']['output'];
  product?: Maybe<Product>;
  typefile?: Maybe<Scalars['String']['output']>;
};

export type List = {
  __typename?: 'List';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  linkImageList?: Maybe<LinkImageList>;
  name: Scalars['String']['output'];
  product?: Maybe<Array<Maybe<Product>>>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProfileForUser?: Maybe<Profile>;
  allProductsByCompany: Array<Product>;
  changePassword?: Maybe<Message>;
  createAdmin?: Maybe<AuthPayload>;
  createCategory?: Maybe<Category>;
  createContentCaracteristicas?: Maybe<ContentProduct>;
  createContentDescripcion?: Maybe<ContentProduct>;
  createContentEspecificaciones?: Maybe<ContentProduct>;
  createContentOtros?: Maybe<ContentProduct>;
  createContentVideos?: Maybe<ContentProduct>;
  createListWithProducts?: Maybe<List>;
  createPrice?: Maybe<Price>;
  createProduct?: Maybe<Product>;
  createStock?: Maybe<Stock>;
  createSubcategoryWithProducts?: Maybe<Category>;
  createWorker?: Maybe<Message>;
  deletePost?: Maybe<Post>;
  incrementPostViewCount?: Maybe<Post>;
  login?: Maybe<AuthPayload>;
  rootchangePassword?: Maybe<Message>;
  togglePublishPost?: Maybe<Post>;
  updateCategory?: Maybe<Category>;
  updateContentCaracteristicas?: Maybe<ContentProduct>;
  updateContentDescripcion?: Maybe<ContentProduct>;
  updateContentEspecificaciones?: Maybe<ContentProduct>;
  updateContentOtros?: Maybe<ContentProduct>;
  updateContentVideos?: Maybe<ContentProduct>;
  updateListWithProducts?: Maybe<List>;
  updatePrice?: Maybe<Price>;
  updateProduct?: Maybe<Product>;
  updateStock?: Maybe<Stock>;
  updateSubcategoryWithProducts?: Maybe<Category>;
};


export type MutationAddProfileForUserArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  userUniqueInput: UserUniqueInput;
};


export type MutationAllProductsByCompanyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  companyId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  typeUserID: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateContentCaracteristicasArgs = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationCreateContentDescripcionArgs = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationCreateContentEspecificacionesArgs = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationCreateContentOtrosArgs = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationCreateContentVideosArgs = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
};


export type MutationCreateListWithProductsArgs = {
  name: Scalars['String']['input'];
  productIds: Array<Scalars['Int']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePriceArgs = {
  bulkPrice?: InputMaybe<Scalars['Float']['input']>;
  bulkQuantity?: InputMaybe<Scalars['Int']['input']>;
  currencyId: Scalars['Int']['input'];
  onSale?: InputMaybe<Scalars['Boolean']['input']>;
  productId: Scalars['Int']['input'];
  unitPrice: Scalars['Float']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateProductArgs = {
  SKU?: InputMaybe<Scalars['String']['input']>;
  UPC?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateStockArgs = {
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCreateSubcategoryWithProductsArgs = {
  name: Scalars['String']['input'];
  parentId: Scalars['Int']['input'];
  productIds: Array<Scalars['Int']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateWorkerArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIncrementPostViewCountArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRootchangePasswordArgs = {
  idUser: Scalars['Int']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationTogglePublishPostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateContentCaracteristicasArgs = {
  TypeContentProductId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateContentDescripcionArgs = {
  TypeContentProductId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateContentEspecificacionesArgs = {
  TypeContentProductId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateContentOtrosArgs = {
  TypeContentProductId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateContentVideosArgs = {
  TypeContentProductId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateListWithProductsArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePriceArgs = {
  bulkPrice?: InputMaybe<Scalars['Float']['input']>;
  bulkQuantity?: InputMaybe<Scalars['Int']['input']>;
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  onSale?: InputMaybe<Scalars['Boolean']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductArgs = {
  SKU?: InputMaybe<Scalars['String']['input']>;
  UPC?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateStockArgs = {
  id: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateSubcategoryWithProductsArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewContentInput = {
  TypeContentProductId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
};

export type NewPriceInput = {
  bulkPrice?: InputMaybe<Scalars['Float']['input']>;
  bulkQuantity?: InputMaybe<Scalars['Int']['input']>;
  currencyId: Scalars['Int']['input'];
  onSale?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice: Scalars['Float']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewStockInput = {
  quantity: Scalars['Int']['input'];
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Int']['output'];
};

export type PostCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PostOrderByUpdatedAtInput = {
  updatedAt: SortOrder;
};

export type Price = {
  __typename?: 'Price';
  bulkPrice?: Maybe<Scalars['Float']['output']>;
  bulkQuantity?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Company>;
  currency?: Maybe<Currency>;
  id: Scalars['Int']['output'];
  onSale?: Maybe<Scalars['Boolean']['output']>;
  unitPrice: Scalars['Float']['output'];
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type Product = {
  __typename?: 'Product';
  SKU?: Maybe<Scalars['String']['output']>;
  UPC?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Array<Maybe<Category>>>;
  company?: Maybe<Company>;
  contentProduct?: Maybe<Array<Maybe<ContentProduct>>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Array<Maybe<LinkImageProduct>>>;
  list?: Maybe<Array<Maybe<List>>>;
  name: Scalars['String']['output'];
  price?: Maybe<Array<Maybe<Price>>>;
  updatedAt: Scalars['DateTime']['output'];
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductFilterInput = {
  orderBy?: InputMaybe<SortOrder>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<Category>;
  allCategoriesByCompany: Array<Category>;
  allCategoriesByCompanyOnlyVisible: Array<Category>;
  allImagesProducts: Array<LinkImageProduct>;
  allLists: Array<List>;
  allListsByCompany: Array<List>;
  allPrices: Array<Price>;
  allProducts: Array<Product>;
  allSubcategories: Array<Category>;
  allSubcategoriesByCompany: Array<Category>;
  allTypeUser: Array<TypeUser>;
  allUsers: Array<User>;
  allWorkers: Array<User>;
  feed: Array<Post>;
  getAllSubcategoriesbyCategoryCompanyId?: Maybe<Category>;
  getCompanyId?: Maybe<CompanyId>;
  getCompanyName?: Maybe<CompanyName>;
  getSuscriptionCompany?: Maybe<SuscriptionbyCompany>;
  listByCompany?: Maybe<List>;
  me?: Maybe<User>;
  postById?: Maybe<Post>;
  productById?: Maybe<Product>;
  productByIdAndCompanyId?: Maybe<Product>;
  productsByList: Array<Product>;
  productsBySubcategory: Array<Product>;
  subcategoryByCompany?: Maybe<Category>;
  usersByCompany: Array<User>;
  workerCountByCompany?: Maybe<Scalars['Int']['output']>;
};


export type QueryAllCategoriesByCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryAllCategoriesByCompanyOnlyVisibleArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryAllListsByCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryAllSubcategoriesByCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryAllWorkersArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFeedArgs = {
  orderBy?: InputMaybe<PostOrderByUpdatedAtInput>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllSubcategoriesbyCategoryCompanyIdArgs = {
  companyId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryGetCompanyNameArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryGetSuscriptionCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryListByCompanyArgs = {
  companyId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryPostByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductByIdArgs = {
  companyId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryProductByIdAndCompanyIdArgs = {
  companyId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryProductsByListArgs = {
  listId: Scalars['Int']['input'];
};


export type QueryProductsBySubcategoryArgs = {
  subcategoryId: Scalars['Int']['input'];
};


export type QuerySubcategoryByCompanyArgs = {
  companyId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryUsersByCompanyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkerCountByCompanyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Status = {
  __typename?: 'Status';
  status: Scalars['Boolean']['output'];
};

export type Stock = {
  __typename?: 'Stock';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  product?: Maybe<Product>;
  quantity: Scalars['Int']['output'];
};

export type Suscription = {
  __typename?: 'Suscription';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type SuscriptionbyCompany = {
  __typename?: 'SuscriptionbyCompany';
  name: Scalars['String']['output'];
};

export type TypeContentCategory = {
  __typename?: 'TypeContentCategory';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TypeContentProduct = {
  __typename?: 'TypeContentProduct';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TypeUser = {
  __typename?: 'TypeUser';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  company?: Maybe<Company>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  typeuser?: Maybe<TypeUser>;
  username: Scalars['String']['output'];
};

export type UserUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyId = {
  __typename?: 'companyId';
  companyId: Scalars['Int']['output'];
};

export type AllProductsByCompanyMutationVariables = Exact<{
  CompanyId?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
}>;


export type AllProductsByCompanyMutation = { __typename?: 'Mutation', allProductsByCompany: Array<{ __typename?: 'Product', id: number, name: string, createdAt: any, price?: Array<{ __typename?: 'Price', unitPrice: number, currency?: { __typename?: 'Currency', abbreviation: string } | null } | null> | null, image?: Array<{ __typename?: 'LinkImageProduct', link: string } | null> | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name?: string | null, profile?: { __typename?: 'Profile', id: number, bio?: string | null } | null } | null };

export type AllCategoriesByCompanyOnlyVisibleQueryVariables = Exact<{
  companyId: Scalars['Int']['input'];
}>;


export type AllCategoriesByCompanyOnlyVisibleQuery = { __typename?: 'Query', allCategoriesByCompanyOnlyVisible: Array<{ __typename?: 'Category', id: number, name: string, linkImageCategory?: { __typename?: 'LinkImageCategory', link: string } | null }> };


export const AllProductsByCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AllProductsByCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CompanyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProductsByCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CompanyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<AllProductsByCompanyMutation, AllProductsByCompanyMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const AllCategoriesByCompanyOnlyVisibleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCategoriesByCompanyOnlyVisible"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategoriesByCompanyOnlyVisible"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"linkImageCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]} as unknown as DocumentNode<AllCategoriesByCompanyOnlyVisibleQuery, AllCategoriesByCompanyOnlyVisibleQueryVariables>;