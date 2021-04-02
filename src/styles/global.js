// Dependencies
import styled, { createGlobalStyle } from 'styled-components'

// Styles
const GlobalStyles = createGlobalStyle`
  // Theme colors
  :root {
    --primary: #e20e8d;
    --secondary: #030518;

    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  // All tags
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Page parent container
  html, body, #__next {
    height: 100%;
    background-color: var(--background);
    color: var(--white);
    scroll-behavior: smooth;
  }

  // Reset default html tags css
  body {
    overflow-y: auto;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  // Input styles 
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
      border-color: var(--primary);
    }
    transition: all 0.3s;
  }  
`

// Calc column width func
const getColumnWidth = (span) => {
  if (!span) return
  const width = span / 12 * 100
  return `width: ${width}%`
}

// Container Styles
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

// Row Styles
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

// Column Styles
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

// Exporting global styles
export default GlobalStyles