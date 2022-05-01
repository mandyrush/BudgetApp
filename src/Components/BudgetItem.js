const BudgetItem = ({
    item
}) => {
    return (
        <li>
            {item.payment_category}
            {item.title}
            {item.payment_method}
            {item.payment_day}
            {item.amount}
        </li>
    )
}

export default BudgetItem;