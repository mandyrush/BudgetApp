import styled from "styled-components";

import { green } from "@mui/material/colors";

export const WidgetContainer = styled.article`
  border: 1px solid ${green[500]};
  border-radius: 4px;
`;

export const WidgetHeader = styled.div`
  background-color: ${green[500]};
  color: #000;
  padding: 1rem;
`;

export const WidgetBody = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem;
`;

export const WidgetFooter = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  background-color: ${green[500]};
  color: #000;
  padding: 1rem;
`;
