import Widget from "../../Organisms/Widget/Widget";
import Grid from "@mui/material/Grid";
import PageLayout from "../../Containers/Page/PageLayout";
import Header from "../../Atoms/Header/Header";
import Typography from "@mui/material/Typography";

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
    <PageLayout>
      <Header level="h1">Dashboard</Header>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Widget title="Budget" data={tempBudgetValues} total={2700.0} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;
