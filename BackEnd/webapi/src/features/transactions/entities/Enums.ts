export enum TransactionCategory {
    CATEGORY1 = 'category1',
    CATEGORY2 = 'category2'
}

export enum TransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit'
}

export const TransactionCategoryList = Object.values(TransactionCategory)
export const TransactionTypeList = Object.values(TransactionType)