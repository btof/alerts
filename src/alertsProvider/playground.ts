import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import { schema } from '../data/schema';

export class Playground {
  startGraphql() {
    const app = express();
    app.use(cors());

    // Should be removed when apollo-server supports offline playground
    app.use(
      '/graphql-playground-react',
      express.static(require.resolve('graphql-playground-react/package.json').slice(0, -12)),
    );

    const server = new ApolloServer({
      schema: schema,
      playground: {
        cdnUrl: '.',
        version: '',
      },
    });

    server.applyMiddleware({ app });

    app.listen({ port: 5000 }, () => {
      console.log('GraphQL');
    });
  }
}
