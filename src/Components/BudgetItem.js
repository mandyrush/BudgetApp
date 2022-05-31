const BudgetItem = ({
    item
}) => {
    return (
        <tr>
            <td>{item.payment_category}</td>
            <td>{item.title}</td>
            <td>{item.payment_method}</td>
            <td>{item.payment_day}</td>
            <td>{item.amount}</td>
        </tr>
    )
}

export default BudgetItem;