import styled, { createGlobalStyle } from 'styled-components'

export const SIZES = {
    smphone: '@media (max-width:400px)',
    phone: '@media (max-width:576px)',
    tablet: '@media (max-width:768px)',
    desktop: '@media (max-width:992px)',
    xldesktop: '@media (min-width:1921px)',
}

export const Wrapper = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    background-color: inherit;

    ${SIZES.phone} {
        overflow-x: hidden;
    }
`

export const MainSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`

export const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color:${({ theme }) => theme.backgroundColor.white};
    line-height: 1;
    font-size:16px;
    min-width:320px;
  }

  
  img{
    width:100%;
    height:100%;
  }


  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input,
  button,
  video {
    border: 0;
    outline:0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  button,
  input,
  input:focus{
    border:none;
    outline:none;
  }
    

    /* HTML5 display-role reset for older browsers */

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    a{
        text-decoration:none;
        color:inherit;
    }

    blockquote {
      &::before,
      &::after {
        content: '';
      }
    }

    q {
      &::before,
      &::after {
        content: '';
      }
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }   


  `

export default GlobalStyle
