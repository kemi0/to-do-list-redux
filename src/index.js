import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import promise from 'redux-promise';
import customPromise from './middlewear/promise'
import App from './components/app';

// setting the store state of our application
const store = createStore(rootReducer, {}, applyMiddleware(customPromise));

// wrap provider inside router
ReactDOM.render(
    <Provider store={store}>
        <Router>
             <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

//successfullly added list to dom with component did mount and added promise from npm  