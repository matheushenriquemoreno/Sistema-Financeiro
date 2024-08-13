import { Global, Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';
import { AccountsModule } from 'src/features/accounts/accounts.module';

@Global()
@Module({
  imports: [AccountsModule],
  providers: [TenantService],
  exports:[TenantService]
})
export class TenantModule {}
