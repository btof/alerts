import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers, fileLoader } from 'merge-graphql-schemas';

const getGqlTypeSource = (gqlType) => gqlType.loc.source.body;

const types = mergeTypes(fileLoader(path.join(__dirname, '../data/types'), { recursive: true }).map(getGqlTypeSource));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '../data/resolvers'), { recursive: true }));

export const schema = makeExecutableSchema({
  typeDefs: [types],
  resolvers: resolvers as { [key: string]: any },
});

export default schema;
