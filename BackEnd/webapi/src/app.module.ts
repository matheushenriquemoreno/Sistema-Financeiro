import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './features/transactions/transactions.module';
import { AccountsModule } from './features/accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { ReportsModule } from './features/reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TransactionsModule,
    AccountsModule,
    AuthModule,
    TenantModule,
    ReportsModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
