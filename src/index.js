import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import { reducer } from "./reducers"
import { Provider } from 'react-redux';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, rootElement);


//import createStore - allows us to create a Redux state store and it needs to take a function that needs to manipulate the state
// import reducer is the function that manipulate our state that we pass to create store
//import provider is the wrapper which allows state to be used by everything inside of our app