import Typography from "@mui/material/Typography";
import Header from "../../Atoms/Header/Header";
import Button from "@mui/material/Button";
import {
  WidgetContainer,
  WidgetHeader,
  WidgetBody,
  WidgetFooter,
} from "./Styles";

interface WidgetProps {
  title: string;
  data: { label: string; value: number }[];
  total: number;
}

const Widget = ({ title, data, total }: WidgetProps) => {
  return (
    <WidgetContainer>
      <WidgetHeader>
        <Header level="h2" color="#000">
          {title}
        </Header>
      </WidgetHeader>
      <WidgetBody>
        <ul>
          {data.map((item) => (
            <li>
              <Typography variant="body1">
                {item.label} - ${item.value}
              </Typography>
            </li>
          ))}
        </ul>
      </WidgetBody>
      <WidgetFooter>
        <Button variant="text">Details</Button>
        <Typography variant="body1">Total: ${total}</Typography>
      </WidgetFooter>
    </WidgetContainer>
  );
};

export default Widget;
