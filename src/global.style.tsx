import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Dancing Script", system-ui;
    font-weight: 400;
    font-optical-sizing: auto;
  font-style: normal;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
  background-image: url('/public/Background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.5;
}
`;
