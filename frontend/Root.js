import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/App';


import configureStore from './store/store';

const store = configureStore({});

console.log(store.getState());

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;