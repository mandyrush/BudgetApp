import { BudgetEntry } from "../../../../Models/Budget";
import { BudgetEntryContainer } from "./Styles";
import moment from "moment";

interface BudgetItemProps {
  item: BudgetEntry;
}

const BudgetItem = ({ item }: BudgetItemProps) => {
  return (
    <BudgetEntryContainer>
      <div>
        <div>{item.title}</div>
        <div>Category: {item.payment_category}</div>
        <div>
          Paid from {item.payment_method} on the{" "}
          {moment(item.payment_day).format("Do")}
        </div>
      </div>
      <div>
        {new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(item.amount)}
      </div>
    </BudgetEntryContainer>
  );
};

export default BudgetItem;
