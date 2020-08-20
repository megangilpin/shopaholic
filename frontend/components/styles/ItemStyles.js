import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  .card {
    border-radius: 10px;
    transition: all .15s;
    overflow: hidden;
    line-height: 1.5;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      transition: all .15s;
    }
    .card_title {
      color: ${props => props.theme.lightgrey};
      flex-grow: 1;
      text-align: left important!;
      padding: 0;
      font-size: 2.8rem;
      font-weight: 400;
      letter-spacing: .5rem;
      text-shadow: -1px -1px 1px rgba(255,255,255), 1px 1px 2px #b3b3b3;
      border: 0;
      padding: 5px;
      cursor: pointer;
      transition: all .15s;
    }
    p {
      line-height: 1;
      color: ${props => props.theme.lightPurple};
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
      text-align: left;
      padding: 5px;
      transition: all .15s;
    }
    // p.card_description {
    //   display: none;
    // }
    .buttonList {
      display: grid;
      width: 100%;
      border-top: 1px solid ${props => props.theme.lightgrey};
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 1px;
      background: ${props => props.theme.lightgrey};
      text-align: center;
      margin-top: 5px;
      visibility: hidden;
      & > * {
        background: ${props => props.theme.offWhite};
        border: 0;
        color: ${props => props.theme.darkGrey};
        font-size: 1.2rem;
        font-weight: 700;
        padding: 1.5rem;
        line-height: 1.5;
      }
    }
    &:hover {
      box-shadow: ${props => props.theme.boxshadow};
      // background: ${props => props.theme.greyWhite};
      // -webkit-transform: scale(1.03);
      // -ms-transform: scale(1.03);
      // transform: scale(1.03);
      img {
        -webkit-transform: scale(.9);
        -ms-transform: scale(.9);
        transform: scale(.9);
      }
      .card_title {
        color:  ${props => props.theme.darkGrey};
        text-shadow: -1px -1px 1px transparent, 1px 1px 2px transparent;
        font-size: 3rem;
        letter-spacing: .3rem;
        margin-left: 1rem;
        &:hover {
          color:  ${props => props.theme.lightgrey};
          font-weight: 400;
          text-shadow: -1px -1px 1px rgba(255,255,255), 1px 1px 2px #b3b3b3;
        }
        &:active {
          text-shadow: none;
          border: none;
          color:  ${props => props.theme.grey};
          font-weight: 400;
        }
      }
      p {
        margin-left: 1rem;
        color:  ${props => props.theme.darkGrey};
      }
      p.card_money {
        font-weight: bold;
      }
      // p.card_description {
      //   display: inherit;
      //   font-size: 1.5rem;
      //   font-weight: 500;
      // }
      .buttonList {
        visibility: visible;
        & > * {
          &:hover {
            color:  ${props => props.theme.medPurple};
            cursor: pointer;
          }
        }
      }
    }
  }
  // hr {
  //   width: 100%;
  //   height: 2px;
  //   border: 0;
  //   margin-top: 1.5rem;
  //   background-color: ${props => props.theme.offWhite};
  //   box-shadow: ${props => props.theme.lgemboss};
  // }
`;

export default Item;