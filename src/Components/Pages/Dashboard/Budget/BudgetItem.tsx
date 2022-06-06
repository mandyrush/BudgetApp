import { BudgetItemData } from "../../../../Models/BudgetItem";

const BudgetItem: React.FC<{ item: BudgetItemData }> = (props) => {
    return (
        <tr>
            <td>{props.item.payment_category}</td>
            <td>{props.item.title}</td>
            <td>{props.item.payment_method}</td>
            <td>{props.item.payment_day}</td>
            <td>{props.item.amount}</td>
        </tr>
    )
}

export default BudgetItem;