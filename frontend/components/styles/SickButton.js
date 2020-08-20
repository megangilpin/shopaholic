import styled from 'styled-components';

const SickButton = styled.button`
  background: ${props => props.theme.offWhite};
  border: 0;
  border-radius: 10px;
  padding: 1.7rem 2rem;
  color: ${props => props.theme.lightgrey};
  text-shadow: ${props => props.theme.lgemboss};
  font-size: 3.5rem;
  font-weight: 400;
  letter-spacing: .3rem;
  cursor: pointer;
  transition: all .4s;
  // border: 3px solid #E3E2E9;
  // border-radius: 6px;
  // box-shadow:
  //   0 2px 1px rgba(0, 0, 0, 0.2), 
  //   inset 0 2px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    // color: ${props => props.theme.darkGrey};
    // text-shadow: ${props => props.theme.greyemboss};
    color:  ${props => props.theme.lightPurple};
    box-shadow: -6px -6px 10px white,
    1px 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export default SickButton;
