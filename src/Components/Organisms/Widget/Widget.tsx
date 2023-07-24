import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { WidgetContainer } from "./Styles";

interface WidgetProps {
  title: string;
  data: { label: string; value: number }[];
  total: number;
}

const Widget = ({ title, data, total }: WidgetProps) => {
  return (
    <WidgetContainer>
      <Typography variant="h2">{title}</Typography>
      <ul>
        {data.map((item) => (
          <li>
            <Typography variant="body1">
              {item.label} - ${item.value}
            </Typography>
          </li>
        ))}
      </ul>
      <Button variant="text">Details</Button>
      <Typography variant="body1">${total}</Typography>
    </WidgetContainer>
  );
};

export default Widget;
