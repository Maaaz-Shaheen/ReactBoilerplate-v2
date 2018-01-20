import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Router 
import AppRouter, { history } from './routers/AppRouter';

// Styles
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'


// Redux

import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { Provider } from 'react-redux';

// Firebase

import { firebase } from './firebase/firebase';

// Working
const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    };
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        };
        ReactDOM.render(jsx, document.getElementById('root'));
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});