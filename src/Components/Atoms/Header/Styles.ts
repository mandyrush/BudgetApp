import styled from "styled-components";

import Typography from "@mui/material/Typography";

export const StyledHeader = styled(Typography)<{ color?: string }>`
  color: ${({ color }) => (color ? color : "#fff")};
`;
