import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header'
import Meta from '../components/Meta'

const theme = {
  red: '#99991A',
  darkPurple: '#2b1f4f',
  purple: '#726F93',
  medPurple: '#b6b6c8',
  lightPurple: '#c5c5d3',
  black: '#383749',
  charcoal: '#545066',
  darkGrey: '#6c6383',
  medGrey: '#a099b2',
  grey: '#bbb6c8',
  lightgrey: '#e4e2e9',
  greyWhite: '#f2f2f2',
  offWhite: '#F6F6F6',
  // darkGrey: '#C0BABA',
  // lightPurple: '#C7C6D4#d5d3de',
  // lightgrey: '#E3E2E9',
  // lightgrey: '#e1e1eb',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0,09)',
  lgemboss: '-2px -2px 2px rgba(255, 255, 255), 1px 1px 2px #b3b3b3',
  lgembossBig: '2px -2px 2px  rgba(255, 255, 255), 1px 2px 2px #b3b3b3',
  greyemboss: '-1px -2px 2px rgba(255, 255, 255) , 1px 1px 2px #545066',
  purpleEmboss: '-1px -2px 2px #E3E2E9 , 1px 1px 2px #726F93',
  boxshadow:  '-6px -6px 10px white , 1px 1px 5px rgba(0, 0, 0, 0.1)'
};

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
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
    color: ${theme.darkGrey};
  }
  a {
    font-size: 1.4rem; 
    font-weight: 400;
    text-decoration: none;
    color: ${theme.purple};
  }
  button {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    font-weight: 700;
    font-size: 2rem;
    &:focus {
      outline: none;
    }
  }
  h3, h2 { 
    color: ${theme.purple};
  }
  .blockquote { 
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace; 
    font-size: 2rem; 
    font-weight: 500; 
    line-height: 3rem; 
    color: ${theme.purple};
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