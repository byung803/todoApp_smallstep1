import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Router from './router';
import reducer from './reducers';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('app'));
