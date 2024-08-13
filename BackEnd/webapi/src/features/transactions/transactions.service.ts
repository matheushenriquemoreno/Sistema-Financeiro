import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { TenantService } from 'src/tenant/tenant/tenant.service';

@Injectable()
export class TransactionsService {

  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: typeof Transaction,
    private tenantService: TenantService
  ) {
  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.create({
      ...createTransactionDto,
      account_id: this.tenantService.tenant.id
    });
  }

  findAll() {
    return this.transactionRepository.findAll<Transaction>({
      where: {
        account_id: this.tenantService.tenant.id
      }
    });
  }
}
