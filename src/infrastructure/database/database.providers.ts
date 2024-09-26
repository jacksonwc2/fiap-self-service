import {DataSource} from 'typeorm';
import {DynamoDB} from "aws-sdk";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        entities: [__dirname + '/../../core/**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'DOCUMENT_DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: process.env.DOCUMENT_DATABASE_HOST,
        port: parseInt(process.env.DOCUMENT_DATABASE_PORT),
        username: process.env.DOCUMENT_DATABASE_USERNAME,
        password: process.env.DOCUMENT_DATABASE_PASSWORD,
        database: process.env.DOCUMENT_DATABASE_DATABASE,
        entities: [__dirname + '/../../core/**/*.entity.document{.ts,.js}']
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'CACHE_DATA_SOURCE',
    useFactory: async () => {
      return new DynamoDB.DocumentClient({
        region: process.env.DYNAMODB_REGION,
        endpoint: process.env.DYNAMODB_ENDPOINT
      })
    }
  }
];
