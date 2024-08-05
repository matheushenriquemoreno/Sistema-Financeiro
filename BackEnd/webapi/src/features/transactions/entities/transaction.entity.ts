import { Table, Column, Model, PrimaryKey, DataType, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { TransactionCategory, TransactionType } from './Enums';
import { Account } from 'src/features/accounts/entities/account.entity';
import { ToNumber } from 'src/common/db/to-number.decorator';

@Table({
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
export class Transaction extends Model {

    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
    id: string;

    @Column({
        allowNull: false
    })
    payment_date: Date;

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false
    })
    description: string;

    @Column({
        allowNull: false
    })
    category: TransactionCategory;

    @ToNumber
    @Column({
        allowNull: false,
        type: DataType.DECIMAL(18,2)
    })
    amount: number;

    @Column({
        allowNull: false
    })
    type: TransactionType;

    @ForeignKey(() => Account)
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, allowNull: false})
    account_id: string;

    @BelongsTo(() => Account)
    account: Account;
}
