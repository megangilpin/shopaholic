import styled from 'styled-components';

const Supreme = styled.h2`
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${props => props.theme.lightgrey};
  text-shadow: -1px -1px 1px white, 1px 1px 1px #a099b2;
`;

export default Supreme;
