import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './features/transactions/transactions.module';
import { AccountsModule } from './features/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionsModule,
    AccountsModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
