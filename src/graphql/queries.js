/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIncom = /* GraphQL */ `
  query GetIncom($id: ID!) {
    getIncom(id: $id) {
      id
      name
      description
      amount
    }
  }
`;
export const listIncoms = /* GraphQL */ `
  query ListIncoms(
    $filter: ModelIncomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        amount
      }
      nextToken
    }
  }
`;
