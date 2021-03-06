import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {

  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: rgb(250, 250, 250);
  }
  ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
  color: var(--text-color);
  text-decoration: none;
  }
  :root {
  --bg: #303030;
  --bg-accent: #505050;
  --text-color: #dadce1;
  --nav-sive: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;


export default GlobalStyles;
