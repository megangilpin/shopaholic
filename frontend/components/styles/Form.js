import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${props => props.theme.boxshadow};
  color:  ${props => props.theme.darkGrey};
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 2rem;
  label {
    display: block;
    margin-bottom: 2rem;
  }
  textarea {
    color: red;
  }
  textarea,
  select, 
  input {
    color:  ${props => props.theme.darkPurple};
    background-color: ${props => props.theme.offWhite};
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border-style: none;
    border-bottom: 1px solid ${props => props.theme.lightPurple};
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.grey};
      opacity: 1; /* Firefox */
    }
    &:focus {
      outline: 0;
      border: none;
      box-shadow: inset -6px -6px 10px white, inset
      1px 1px 5px rgba(0, 0, 0, 0.1);
      outline: none;
    }
  }
  textarea {
    border: 1px solid ${props => props.theme.lightPurple};
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.lightgrey};
    box-shadow: ${props => props.theme.lgemboss};
    color: ${props => props.theme.purple};
    font-size: 2rem;
    font-weight: 600;
    border: 0;
    border-radius: 10px;
    padding: 1.7rem 2rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    // font-weight: 600;
    // font-size: 2.5rem;
    // background: none;
    // border: 0;
    // border-radius: 10px;
    // cursor: pointer;
    // color:  ${props => props.theme.lightPurple};
    transition: all .3s;
    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      box-shadow: none;
      background: ${props => props.theme.offWhite};
      color: ${props => props.theme.lightgrey};
      text-shadow: ${props => props.theme.lgemboss};
      font-weight: 400;
      // font-size: 2.5rem;
    }
    &:focus 
    {
      text-shadow: none;
      outline: none;
      color:  ${props => props.theme.grey};
      font-weight: 600;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 5px;
      content: '';
      display: block;
      // background-image: linear-gradient(to right, #2b1f4f 0%, #726F93 25%, #b6b6c8 50%, #726F93 75%, #2b1f4f 100%);
      background-color: ${props => props.theme.lightgrey};
      box-shadow: ${props => props.theme.lgemboss};
      margin-bottom: 2rem;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
