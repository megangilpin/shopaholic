import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${props => props.theme.lightgrey};
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  // border-left: 10px solid ${props => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px #AAA9BE;
  }

  to {
    box-shadow: 0 0 10px 1px #AAA9BE;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  margin: 3rem 0;
  input {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    background-color: ${props => props.theme.offWhite};
    width: 35%;
    padding: 10px;
    border: 0;
    font-size: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.lightPurple};
    color: ${props => props.theme.darkPurple};
    &:loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
    &:focus {
      width: 100%;
      border-bottom: none;
      box-shadow: inset -6px -6px 10px white, inset
      1px 1px 5px rgba(0, 0, 0, 0.1);
      outline: none;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.medGrey};
      opacity: 1; /* Firefox */
    }
    @media (max-width: 1300px) {
      width: 45%;
    }
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export { DropDown, DropDownItem, SearchStyles };