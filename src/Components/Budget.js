import axios from 'axios';
import { useState, useEffect } from 'react';
import BudgetItem from './BudgetItem';
import BudgetItemCreate from './BudgetItemCreate';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    margin-bottom: 3rem;
    border-collapse: collapse;
    & th {
        text-align: left;
    }
    & tr {
       border-bottom: 1px solid #ccc;
    }
`;

const BUDGET_API = process.env.REACT_APP_BASEURL;

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState([]);

    useEffect(() => {
        axios.get(`${BUDGET_API}/budgets`)
            .then(response => {
                setBudgetItems(response.data);
            });
    }, [])

    const handleAddBudgetItem = (item) => {
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