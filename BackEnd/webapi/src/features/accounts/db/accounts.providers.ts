import { Account } from "../entities/account.entity";

export const AccountProviders = [
  {
    provide: 'Account_REPOSITORY',
    useValue: Account,
  },
];