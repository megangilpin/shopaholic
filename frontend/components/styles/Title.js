import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  a {
    display: inline;
    padding: 2rem;
    // color:  ${props => props.theme.lightPurple};
    // text-shadow: ${props => props.theme.lgemboss};
    // font-size: 3rem;
    // font-weight: 400;
    // letter-spacing: 0.1em;
    border: 0;
    border-radius: 10px;
    text-transform: uppercase;
    &:hover {
      color: ${props => props.theme.lightgrey};
      text-shadow: ${props => props.theme.lgemboss};
      outline: none;
      box-shadow: none;
      font-weight: 300;
      font-size: 1.8em;
    }
  }
`;

export default Title;
