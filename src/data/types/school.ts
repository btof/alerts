import gql from 'graphql-tag';

export default gql`
  type School {
    name: String
  }

  type Query {
    schools: [School]
  }
`;
