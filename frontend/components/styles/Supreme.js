import styled from 'styled-components';

const Supreme = styled.h2`
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${props => props.theme.darkGrey};
  text-shadow: ${props => props.theme.purpleEmboss};
`;

export default Supreme;
