import { BudgetEntry } from "../../../Models/Budget";
import { BudgetEntryContainer } from "./Styles";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(AdvancedFormat);

interface BudgetItemProps {
  item: BudgetEntry;
}

const BudgetItem = ({ item }: BudgetItemProps) => {
  const paymentDate = new Date(`01-${item.payment_day}-2000`);

  return (
    <BudgetEntryContainer>
      <div>
        <div>{item.title}</div>
        <div>Category: {item.payment_category}</div>
        <div>
          Paid from {item.payment_method} on the{" "}
          {dayjs(paymentDate).format("Do")}
        </div>
      </div>
      <div>
        {item.amount &&
          new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(Number(item.amount))}
      </div>
    </BudgetEntryContainer>
  );
};

export default BudgetItem;
