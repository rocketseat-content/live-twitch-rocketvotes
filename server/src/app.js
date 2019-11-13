import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import schema from './schema';
import AuthMiddleware from './middlewares/AuthMiddleware';

// import { userLoader } from './dataloader';

class App {
  constructor() {
    this.server = new ApolloServer({
      schema,
      playground: process.env.NODE_ENV === 'development',
      context: AuthMiddleware
    });

    this.connectMongo();
  }

  connectMongo() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });
  }
}

export default new App().server;
