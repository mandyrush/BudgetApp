import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontSize: 32, color: "#fff" }}
      >
        Home
      </Typography>
    </Container>
  );
};

export default Home;
