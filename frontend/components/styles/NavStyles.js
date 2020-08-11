import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  display: flex;
  justify-self: end;
  align-items: center;
  transition: all .3s;
  a,
  button {
    height: 7rem;
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: 1.7rem 2rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 600;
    font-size: 1em;
    background: none;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    color:  ${props => props.theme.lightPurple};
    box-shadow: -6px -6px 10px white,
    1px 1px 5px rgba(0, 0, 0, 0.1);
    @media (max-width: 700px) {
      font-size: 12px;
      padding: 0 10px;
    }
    &:hover {
      color: ${props => props.theme.lightgrey};
      text-shadow: ${props => props.theme.lgemboss};
      outline: none;
      box-shadow: none;
      font-weight: 300;
      font-size: 1.8em;
    }
    &:active 
    {
      color: ${props => props.theme.lightgrey};
      text-shadow: ${props => props.theme.lgemboss};
      font-weight: 300;
      font-size: 1.5em;
      box-shadow: inset -6px -6px 10px white, inset
      1px 1px 5px rgba(0, 0, 0, 0.1);
    }
  }
  a.active {
    color: ${props => props.theme.lightgrey};
    text-shadow: ${props => props.theme.lgemboss};
    font-weight: 300;
    font-size: 1.5em;
    box-shadow: inset -6px -6px 10px white, inset
    1px 1px 5px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;

