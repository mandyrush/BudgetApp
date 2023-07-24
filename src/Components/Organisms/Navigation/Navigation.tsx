import { NavContainer, NavLink } from "./Styles";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </NavContainer>
  );
};

export default Navigation;
