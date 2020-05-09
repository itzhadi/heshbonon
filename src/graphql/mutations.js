/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncom = /* GraphQL */ `
  mutation CreateIncom(
    $input: CreateIncomInput!
    $condition: ModelIncomConditionInput
  ) {
    createIncom(input: $input, condition: $condition) {
      id
      name
      description
      amount
    }
  }
`;
export const updateIncom = /* GraphQL */ `
  mutation UpdateIncom(
    $input: UpdateIncomInput!
    $condition: ModelIncomConditionInput
  ) {
    updateIncom(input: $input, condition: $condition) {
      id
      name
      description
      amount
    }
  }
`;
export const deleteIncom = /* GraphQL */ `
  mutation DeleteIncom(
    $input: DeleteIncomInput!
    $condition: ModelIncomConditionInput
  ) {
    deleteIncom(input: $input, condition: $condition) {
      id
      name
      description
      amount
    }
  }
`;
