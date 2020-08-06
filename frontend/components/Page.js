import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header'
import Meta from '../components/Meta'

const theme = {
  red: '#99991A',
  darkPurple: '#2F2E3D',
  black: '#545066',
  grey: '#726F93',
  medPurple: '#AAA9BE',
  lightPurple: '#C7C6D4',
  darkGrey: '#C0BABA',
  lightgrey: '#E3E2E9',
  offWhite: '#F6F6F6',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0,09)',
  lgemboss: '-2px -2px 2px rgba(255, 255, 255), 1px 1px 2px #C0BABA',
  greyemboss: '-1px -2px 2px rgba(255, 255, 255) , 1px 1px 2px #545066',
  purpleEmboss: '-1px -2px 2px #E3E2E9 , 1px 1px 2px #726F93',
};

const StyledPage = styled.div`
  background:${props => props.theme.offWhite};
  color: ${props => props.theme.darkPurple};
`;

const Inner = styled.div `
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal `
  html { 
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    font-style: normal; 
    font-variant: normal; 
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    padding:0;
    margin: 0;
    font-size: 1.4rem;
    line-height: 2;
  }
  p {
    font-size: 1.4rem; 
    font-weight: 400;
    color: ${theme.grey};
  }
  a {
    font-size: 1.4rem; 
    font-weight: 400;
    text-decoration: none;
    color: ${theme.darkGrey};
  }
  button {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    font-weight: 700;
    font-size: 2rem;
  }
  h3 { 
    color: ${theme.grey};
  }
  .blockquote { 
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace; 
    font-size: 2rem; 
    font-weight: 500; 
    line-height: 3rem; 
    color: ${theme.grey};
  }
  .smallquote { 
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace; 
    font-size: 1.6rem; 
    font-weight: 700; 
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage> 
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;