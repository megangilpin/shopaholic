import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 7rem 0;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 10px;
  // color:  ${props => props.theme.medGrey};
  p {
    font-weight: 500;
    letter-spacing: .1rem;
    color:  ${props => props.theme.medGrey};
  }
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color:  ${props => props.theme.lightPurple};
    pointer-events: none;
  }
  a[aria-disabled='false'] {
    color:  ${props => props.theme.darkGrey};
    pointer-events: none;
  }
`;

export default PaginationStyles;
