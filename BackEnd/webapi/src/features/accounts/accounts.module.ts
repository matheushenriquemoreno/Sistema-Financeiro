import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountProviders } from './db/accounts.providers';

@Module({
  exports: [...AccountProviders],
  controllers: [AccountsController],
  providers: [AccountsService, ...AccountProviders],
})
export class AccountsModule {}
