import { gql } from 'apollo-server-express';

export const schoolsQuery = gql`
  query {
    schools {
      name
      location
    }
  }
`;
