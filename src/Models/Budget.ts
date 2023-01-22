export interface PaymentMethod {
  id: number;
  name: string;
}

export interface PaymentCategory {
  id: number;
  name: string;
}

export interface BudgetEntry {
  id: number;
  title: string;
  amount: number;
  payment_method: string;
  payment_day: number;
  payment_category: string;
}
