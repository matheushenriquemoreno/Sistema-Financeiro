import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { DatabaseModule } from 'src/database/databaseModule';
import { transactionProviders } from './db/transactions.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ...transactionProviders],
})
export class TransactionsModule {}
