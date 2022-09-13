import { NavItems, Nav, NavList } from "../../../styledComponents/Nav";

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItems to="/home">Home</NavItems>
        <NavItems to="/about-me">About me</NavItems>
        <NavItems to="/contact">Contact</NavItems>
        <NavItems to="/projects">Projects</NavItems>
      </NavList>
    </Nav>
  );
};

export default Header;
