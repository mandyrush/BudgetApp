import { useState } from 'react';
import BudgetItem from './BudgetItem';

let initialBudget = [
    {
        id: 1,
        name: 'Mortgage',
        amount: 1700.00,
        pmt_method: 'checking',
        pmt_day: 15,
        category: 'house'
    },
    {
        id: 2,
        name: 'Water',
        amount: 100.00,
        pmt_method: 'checking',
        pmt_day: 27,
        category: 'utilities'
    },
    {
        id: 3,
        name: 'Electric',
        amount: 110.00,
        pmt_method: 'CC 2331',
        pmt_day: 20,
        category: 'utilities'
    }
]

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState(initialBudget);

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
        </article>
    )
}

export default Budget;