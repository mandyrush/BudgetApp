import Container from "@mui/material/Container";
import { PageContainer } from "./Styles";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Container maxWidth="lg">
      <PageContainer>{children}</PageContainer>
    </Container>
  );
};

export default Page;
