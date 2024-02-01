import { Nav, LinkStyled, Logo } from './Nav.styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Nav = () => {
  return (
    <Nav>
      <nav>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="catalog/*">Cars</LinkStyled>

        <LinkStyled to="favorites/*">Favorites</LinkStyled>
      </nav>

      <a href="tel:+380730000000">+38 (073) 000-00-00</a>
    </Nav>
  );
};

export default Nav;
