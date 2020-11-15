import { gql } from 'apollo-server-express';

export const schoolsQuery = gql`
  query SchoolsResponse {
    schools {
      name
      location
    }
  }
`;
