import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { themes } from './styled-components/themes';
import { COLOR } from './styled-components/color-constants';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store/store';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans';
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button, a, select, svg {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  select, input {
    outline: none;
  }
`;

ReactDOM.render(
    <ThemeProvider theme={themes}>
    <Provider store={store}>
    <App />
    <GlobalStyle />
    </Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
)