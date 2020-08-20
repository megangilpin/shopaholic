import styled from 'styled-components';

const CloseButton = styled.button`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightgrey};
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  text-shadow: ${props => props.theme.lgemboss};
  &:hover {
    color: ${props => props.theme.grey};
    text-shadow: ${props => props.theme.greyemboss};
  }
`;

export default CloseButton;
