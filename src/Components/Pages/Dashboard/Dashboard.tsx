import Widget from "../../Organisms/Widget/Widget";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { MainContainer } from "./Styles";

const Dashboard = () => {
  const tempBudgetValues = [
    {
      label: "Home",
      value: 2000.0,
    },
    {
      label: "Vehicles",
      value: 500.0,
    },
    {
      label: "Technology",
      value: 200.0,
    },
  ];

  return (
    <MainContainer maxWidth="lg">
      <Typography
        variant="h1"
        gutterBottom
        sx={{ color: "#fff", fontSize: 32 }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Widget title="Budget" data={tempBudgetValues} total={0.0} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Dashboard;
