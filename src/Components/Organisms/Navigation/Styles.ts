import styled from "styled-components";
import { Link } from "react-router-dom";
import { purple } from "@mui/material/colors";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #000;
  border-bottom: 1px solid ${purple[200]};
  padding: 1rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
