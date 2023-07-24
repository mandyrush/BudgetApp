import styled from "styled-components";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: ${pink[600]};
  padding: 1rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
