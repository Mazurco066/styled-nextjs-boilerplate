// Dependencies
import styled, { createGlobalStyle } from 'styled-components'

// Theme colors
export const theme = {
  id: 'T_Def',
  name: 'default',
  colors: {
    primary: '#bb86fc',
    secondary: '#03dac5',
  }
}

// Styles
const GlobalStyles = createGlobalStyle`
  // Page parent container
  html, body, #__next, #layout {
    height: 100%;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;

    // Scrollbar custom style
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba($color: #000000, $alpha: 0.5);
      -webkit-box-shadow: inset 0 0 6px rgba($color: #000000, $alpha: 0.5);
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
      border: 2px solid black;
    }

    &::selection {
      color: #212121;
      z-index: 2;
    }
  }

  // Reset default html tags css
  body {
    overflow-y: auto;
    background-color: #212121;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  input, input:after, input:before, textarea {
    -webkit-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
    outline: none;
  }

  .sc-custom-input {
    width: 100%;
    height: 100%;
    border-color: #212121;
    color: #212121;
    border-radius: 8px;
    font-size: 1rem;
    &:focus {
      border-color: ${theme.colors.primary};
    }
    transition: all 0.3s;
  }

  @font-face {
    font-family: "Oswald";
    src: url("./font/Oswald-Regular.ttf") format("opentype");
  }

  @font-face {
    font-family: "Oswald";
    font-weight: bold;
    src: url("./font/Oswald-Bold.ttf") format("opentype");
  }

  @font-face {
    font-family: "Oswald ExtraBold";
    src: url("./font/Oswald-Bold.ttf") format("opentype");
  }

  @font-face {
    font-family: "Oswald ExtraLightItalic";
    src: url("./font/Oswald-ExtraLight.ttf") format("opentype");
  }

  @font-face {
    font-family: "Oswald Medium";
    src: url("./font/Oswald-Medium.ttf") format("opentype");
  }

  body {
    font-family: "Oswald";
  }

  input, button {
    font-family: "Oswald";
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "Oswald ExtraBold";
  }
`

const getColumnWidth = (span) => {
  if (!span) return
  const width = span / 12 * 100
  return `width: ${width}%`
}

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1280px) { max-width: 1200px; }
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : '0'};
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 0 10px;
  ${({ xs }) => (xs ? getColumnWidth(xs) : 'width: 100%')};
  @media only screen and (min-width: 540px) {
    ${({ sm }) => (sm ? getColumnWidth(sm) : 'width: 100%')};
  }
  @media only screen and (min-width: 768px) {
    ${({ md }) => (md ? getColumnWidth(md) : 'width: 100%')};
  }
  @media only screen and (min-width: 991px) {
    ${({ lg }) => (lg ? getColumnWidth(lg) : 'width: 100%')};
  }
`

export default GlobalStyles
