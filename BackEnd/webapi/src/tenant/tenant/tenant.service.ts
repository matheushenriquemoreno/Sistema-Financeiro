import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/features/accounts/entities/account.entity';

@Injectable()
export class TenantService {
    private account: Account | null = null;

    constructor(
        @Inject('Account_REPOSITORY')
        private acountRepository: typeof Account
    ){

    }

    get tenant() : Account {
        return this.account
    }

    set tenant(account: Account){
        this.account = account;
    } 

    async setTenantBy(subdomain: string){
       this.tenant =  await this.acountRepository.findOne({
            where: {
                subdomain
            },
            rejectOnEmpty: true,
        })
    }
}
