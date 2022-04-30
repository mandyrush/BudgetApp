const BudgetItem = ({
    item
}) => {
    return (
        <li>
            {item.category}
            {item.name}
            {item.pmt_method}
            {item.pmt_day}
            {item.amount}
        </li>
    )
}

export default BudgetItem;