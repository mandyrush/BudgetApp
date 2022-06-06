import axios from 'axios';
import { useState, useEffect } from 'react';
import BudgetItem from './BudgetItem';
import BudgetItemCreate from './BudgetItemCreate';
import { Table } from './Styles';

import { BudgetItemData } from '../../../../Models/BudgetItem';

const BUDGET_API = process.env.REACT_APP_BASEURL;

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState<BudgetItemData[]>([]);

    useEffect(() => {
        axios.get(`${BUDGET_API}/budgets`)
            .then(response => {
                setBudgetItems(response.data);
            });
    }, [])

    const handleAddBudgetItem = (item: BudgetItemData) => {
        setBudgetItems((prevItems) => {
            return [...prevItems, item]
        })
    }

    return (
        <article>
            <h2>Budget</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Payment Method</th>
                        <th>Payment Day</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {budgetItems.map(item => (
                        <BudgetItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </tbody>
            </Table>
            <BudgetItemCreate addBudgetItem={handleAddBudgetItem} />
        </article>
    )
}

export default Budget;