import axios from 'axios';
import { useState, useEffect } from 'react';
import BudgetItem from './BudgetItem';
import BudgetItemCreate from './BudgetItemCreate';

const BUDGET_API = process.env.REACT_APP_BASEURL;

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState([]);

    useEffect(() => {
        axios.get(`${BUDGET_API}/budgets`)
            .then(response => {
                setBudgetItems(response.data);
            });
    })

    const handleAddBudgetItem = (item) => {
        setBudgetItems((prevItems) => {
            return [...prevItems, item]
        })
    }

    return (
        <article>
            <h2>Budget</h2>
            <ul>
                {budgetItems.map(item => (
                    <BudgetItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
            <BudgetItemCreate addBudgetItem={handleAddBudgetItem} />
        </article>
    )
}

export default Budget;