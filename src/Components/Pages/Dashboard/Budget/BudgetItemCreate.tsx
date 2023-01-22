import React, { useState } from "react";
import { BudgetEntry } from "../../../../Models/Budget";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { GridContainer } from "./Styles";

const days = Array.from(new Array(31), (x, i) => i + 1);

const initialPaymentMethods = [
  {
    id: 1,
    name: "checking",
  },
  {
    id: 2,
    name: "cc 2331",
  },
];

const initialPaymentCategories = [
  {
    id: 1,
    name: "house",
  },
  {
    id: 2,
    name: "vehicle",
  },
  {
    id: 3,
    name: "technology",
  },
];

interface BudgetItemCreateProps {
  addBudgetItem: (item: BudgetEntry) => void;
}

const BudgetItemCreate = ({ addBudgetItem }: BudgetItemCreateProps) => {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [paymentCategories, setPaymentCategories] = useState(
    initialPaymentCategories
  );
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDay, setPaymentDay] = useState<number>(1);
  const [paymentCategory, setPaymentCategory] = useState("");

  const handleAddTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleAddPaymentMethod = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  const handleAddPaymentDay = (e: any) => {
    setPaymentDay(Number(e.target.value));
  };

  const handleAddPaymentCategory = (e: any) => {
    setPaymentCategory(e.target.value);
  };

  const handleClearForm = () => {
    setTitle("");
    setAmount(0);
    setPaymentMethod("");
    setPaymentDay(1);
    setPaymentCategory("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newItem = {
      id: Math.floor(Math.random() * 100),
      title,
      amount,
      payment_method: paymentMethod,
      payment_day: paymentDay,
      payment_category: paymentCategory,
    };

    addBudgetItem(newItem);
    handleClearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="title"
            label="Title"
            id="title"
            value={title}
            size="small"
            onChange={handleAddTitle}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            type="text"
            name="amount"
            label="Amount"
            id="title"
            value={amount}
            size="small"
            onChange={handleAddAmount}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="paymentMethodLabel">Payment Method</InputLabel>
          <Select
            name="paymentMethod"
            labelId="paymentMethodLabel"
            id="paymentMethod"
            value={paymentMethod}
            label="Payment Method"
            size="small"
            onChange={handleAddPaymentMethod}
          >
            <MenuItem value="" disabled>
              Select...
            </MenuItem>
            {paymentMethods.map((method) => (
              <MenuItem key={method.id} value={method.name}>
                {method.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="paymentDayLabel">Payment Day</InputLabel>
          <Select
            name="paymentDay"
            id="paymentDay"
            labelId="paymentDayLabel"
            label="Payment Day"
            value={Number(paymentDay)}
            size="small"
            onChange={handleAddPaymentDay}
          >
            <MenuItem value="" disabled>
              Select...
            </MenuItem>
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="paymentCategoryLabel">Payment Category</InputLabel>
          <Select
            name="paymentCategory"
            id="paymentCategory"
            labelId="paymentCategoryLabel"
            label="Category"
            value={paymentCategory}
            size="small"
            onChange={handleAddPaymentCategory}
          >
            <MenuItem value="" disabled>
              Select...
            </MenuItem>
            {paymentCategories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Add
        </Button>
      </GridContainer>
    </form>
  );
};

export default BudgetItemCreate;
