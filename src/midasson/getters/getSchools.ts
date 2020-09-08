import { client } from '../apolloClient/apolloClient';
import { schoolsQuery } from '../queries/schools';
import { fillSchools } from '../../data/collections/schools';

export const getSchools = (): Promise<any> =>
  client.query({ query: schoolsQuery }).then(({ data }: any) => fillSchools(data.schools));
