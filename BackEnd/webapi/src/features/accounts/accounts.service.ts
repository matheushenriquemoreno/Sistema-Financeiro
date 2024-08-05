import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {

  constructor(
    @Inject('Account_REPOSITORY')
    private acountRepository: typeof Account
  ){
  }

  create(createAccountDto: CreateAccountDto) {
    return this.acountRepository.create({
      ...createAccountDto
    })
  }

  findAll() {
    return this.acountRepository.findAll();
  }

  findOne(id: string) {
    return this.acountRepository.findByPk(id, {
      rejectOnEmpty: true,
    })
  }

}
