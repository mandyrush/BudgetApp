import { useState } from 'react';
import BudgetItem from './BudgetItem';
import BudgetItemCreate from './BudgetItemCreate';

let initialBudget = [
    {
        id: 1,
        title: 'Mortgage',
        amount: 1700.00,
        pmt_method: 'checking',
        pmt_day: 15,
        category: 'House'
    },
    {
        id: 2,
        title: 'Water',
        amount: 100.00,
        pmt_method: 'checking',
        pmt_day: 27,
        category: 'Utilities'
    },
    {
        id: 3,
        title: 'Electric',
        amount: 110.00,
        pmt_method: 'CC 2331',
        pmt_day: 20,
        category: 'Utilities'
    }
]

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState(initialBudget);

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