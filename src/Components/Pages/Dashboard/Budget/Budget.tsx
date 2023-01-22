// import axios from "axios";
import { useState, useEffect } from "react";
import { BudgetEntry } from "../../../../Models/Budget";
import BudgetItemCreate from "./BudgetItemCreate";
import BudgetItem from "./BudgetItem";
import { BudgetContainer } from "./Styles";

// const BUDGET_API = process.env.REACT_APP_BASEURL;

const tempBudgetItems = [
  {
    id: 0,
    title: "Mortgage",
    amount: 1730.0,
    payment_method: "checking",
    payment_day: 15,
    payment_category: "house",
  },
  {
    id: 1,
    title: "Truck Loan",
    amount: 345.72,
    payment_method: "checking",
    payment_day: 30,
    payment_category: "vehicle",
  },
  {
    id: 2,
    title: "Spectrum",
    amount: 74.99,
    payment_method: "cc 2331",
    payment_day: 10,
    payment_category: "technology",
  },
] as BudgetEntry[];

const Budget = () => {
  const [budgetItems, setBudgetItems] = useState<BudgetEntry[]>([]);

  useEffect(() => {
    // axios.get(`${BUDGET_API}/budgets`)
    //     .then(response => {
    //         setBudgetItems(response.data);
    //     });
    setBudgetItems(tempBudgetItems);
  }, []);

  const handleAddBudgetItem = (item: BudgetEntry) => {
    setBudgetItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  return (
    <article>
      <h2>Budget</h2>
      <BudgetItemCreate addBudgetItem={handleAddBudgetItem} />
      <BudgetContainer>
        {budgetItems &&
          budgetItems.map((item) => <BudgetItem key={item.id} item={item} />)}
      </BudgetContainer>
    </article>
  );
};

export default Budget;
