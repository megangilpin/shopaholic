import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress'
import Nav from './Nav';
import Link from 'next/link';
import Cart from './Cart';
import Search from './Search';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done(); 
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a {
    padding: 2rem;
    background: ${props => props.theme.offWhite};
    color: ${props => props.theme.lightgrey};
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-shadow: ${props => props.theme.lgemboss};
    border: 0;
    border-radius: 10px;
    text-transform: uppercase;
    text-decoration: none;
  }
  a:hover {
    color:  ${props => props.theme.lightPurple};
    box-shadow: -6px -6px 10px white,
    1px 1px 5px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
    a {
      padding: 0.5rem 1rem;
    }
  }
`;

const StyledHeader = styled.header`
  .bar {
    // border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightPurple};
  }
  hr.navbar {
    height: 10px;
    border: 0;
    background-color: ${props => props.theme.offWhite};
    box-shadow: ${props => props.theme.lgemboss};
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>shopaholic</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    {/* <hr className="navbar"></hr> */}
    <div className="sub-bar">
      <Search></Search>
    </div>
    <Cart></Cart>
  </StyledHeader>
)

export default Header;