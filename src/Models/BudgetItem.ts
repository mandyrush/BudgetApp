export interface PaymentMethod {
    id: number,
    name: string
}

export interface PaymentCategory {
    id: number,
    name: string
}

export interface BudgetItemData {
    id: number,
    title: string,
    amount: string,
    payment_method: string,
    payment_day: string,
    payment_category: string
}
