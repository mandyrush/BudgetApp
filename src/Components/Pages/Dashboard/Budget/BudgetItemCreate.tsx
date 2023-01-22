import React, { useState } from "react";
import { BudgetEntry } from "../../../../Models/Budget";

const days = Array.from(new Array(31), (x, i) => i + 1);

const initialPaymentMethods = [
  {
    id: 1,
    name: "Checking",
  },
  {
    id: 2,
    name: "CC1",
  },
  {
    id: 3,
    name: "CC2",
  },
];

const initialPaymentCategories = [
  {
    id: 1,
    name: "House",
  },
  {
    id: 2,
    name: "Utilities",
  },
  {
    id: 3,
    name: "Cars",
  },
];

interface BudgetItemCreateProps {
  addBudgetItem: (item: BudgetEntry) => void;
}

// Props from Budget
const BudgetItemCreate = ({ addBudgetItem }: BudgetItemCreateProps) => {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [paymentCategories, setPaymentCategories] = useState(
    initialPaymentCategories
  );

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDay, setPaymentDay] = useState("");
  const [paymentCategory, setPaymentCategory] = useState("");

  const handleAddTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAddPaymentMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleAddPaymentDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentDay(e.target.value);
  };

  const handleAddPaymentCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentCategory(e.target.value);
  };

  const handleClearForm = () => {
    setTitle("");
    setAmount("");
    setPaymentMethod("");
    setPaymentDay("");
    setPaymentCategory("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newItem = {
      id: Math.floor(Math.random()),
      title: title,
      amount: amount,
      payment_method: paymentMethod,
      payment_day: paymentDay,
      payment_category: paymentCategory,
    };

    // props.addBudgetItem(newItem);
    handleClearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={handleAddTitle}
      />

      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        step="0.01"
        name="amount"
        id="title"
        placeholder="amount"
        value={amount}
        onChange={handleAddAmount}
      />

      <label htmlFor="paymentMethod">Payment Method</label>
      <select
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={handleAddPaymentMethod}
      >
        <option value="" disabled>
          Select...
        </option>
        {paymentMethods.map((method) => (
          <option key={method.id} value={method.name}>
            {method.name}
          </option>
        ))}
      </select>

      <label htmlFor="paymentDay">Payment Day</label>
      <select
        name="paymentDay"
        id="paymentDay"
        value={paymentDay}
        onChange={handleAddPaymentDay}
      >
        <option value="" disabled>
          Select...
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <label htmlFor="paymentCategory">Category</label>
      <select
        name="paymentCategory"
        id="paymentCategory"
        value={paymentCategory}
        onChange={handleAddPaymentCategory}
      >
        <option value="" disabled>
          Select...
        </option>
        {paymentCategories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default BudgetItemCreate;
