import { StyledHeader } from "./Styles";

interface HeaderProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  children: React.ReactNode;
}

export const Header = ({ level, color, children }: HeaderProps) => {
  const headerSizes = {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
  };

  return (
    <StyledHeader
      variant={level}
      sx={{ fontSize: headerSizes[level] }}
      color={color}
    >
      {children}
    </StyledHeader>
  );
};

export default Header;
