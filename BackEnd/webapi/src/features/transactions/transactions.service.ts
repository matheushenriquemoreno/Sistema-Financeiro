import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: typeof Transaction
  ) {
  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.create({
      ...createTransactionDto
    });
  }

  findAll() {
    return this.transactionRepository.findAll<Transaction>();
  }
}
