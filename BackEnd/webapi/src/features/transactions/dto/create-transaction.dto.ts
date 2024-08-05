import { IsIn, IsISO8601, IsNotEmpty, IsString, MaxLength} from "class-validator";
import { TransactionCategory, TransactionCategoryList, TransactionType, TransactionTypeList } from "../entities/Enums";

export class CreateTransactionDto {
    @IsISO8601()
    @IsNotEmpty()
    payment_date: Date;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    description: string;
    
    @IsIn(TransactionCategoryList)
    @IsNotEmpty()
    category: TransactionCategory;
    
    @IsNotEmpty()
    amount: number;

    @IsIn(TransactionTypeList)
    @IsNotEmpty()
    type: TransactionType;
}
