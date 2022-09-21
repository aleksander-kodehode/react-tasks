import { NavItems, Nav, NavList } from "../../../styledComponents/Nav";

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItems to="/home">Home</NavItems>
        <NavItems to="/about-me">About me</NavItems>
        <NavItems to="/contact">Contact</NavItems>
        <NavItems to="/projects">Projects</NavItems>
        <NavItems to="/cat-facts">Cat facts</NavItems>
        <NavItems to="/counter">Counter</NavItems>
        <NavItems to="/context">Context</NavItems>
      </NavList>
    </Nav>
  );
};

export default Header;
