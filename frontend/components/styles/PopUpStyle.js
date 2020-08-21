import styled from 'styled-components';
import Popup from "reactjs-popup";

const StyledPopup = styled(Popup)`
  &-content {
    background: red;
    border-radius: 10px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    hr {
      margin: 3rem;
      height: 3px;
      border: 0;
      background-color: ${props => props.theme.offWhite};
      box-shadow: ${props => props.theme.lgemboss};
    }
  }
`

export default StyledPopup;