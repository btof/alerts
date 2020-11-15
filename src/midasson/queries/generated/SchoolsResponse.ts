/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SchoolsResponse
// ====================================================

export interface SchoolsResponse_schools {
  __typename: "School";
  name: string | null;
  location: string | null;
}

export interface SchoolsResponse {
  schools: (SchoolsResponse_schools | null)[] | null;
}
