import { after } from 'node:test';
import { Sequelize } from 'sequelize-typescript';
import { Account } from 'src/features/accounts/entities/account.entity';
import { Transaction } from "src/features/transactions/entities/transaction.entity";

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: process.env.DB_CONNECTION as any,
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username:  process.env.DB_USERNAME,
          password:  process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        });
        sequelize.addModels([Transaction, Account]);
        await sequelize.sync({
          // alter: true,
          // force: true,
        });
        return sequelize;
      },
    },
  ];