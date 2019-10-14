import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import jwtDecode from 'jwt-decode'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {setAuthorizationToken} from './utils/auth'
import {setCurrentUser} from './store/actions/authActions'
import { getComplaint } from './store/actions/complaintsActions';

const store = createStore( rootReducer,composeWithDevTools( applyMiddleware( thunk ) ) );

if(localStorage.jwtToken){
    console.log(localStorage.jwtToken)
    console.log(jwtDecode(localStorage.jwtToken, {complete: true}))
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    console.log("store.dispatch(getComplaint())")
    console.log("store.dispatch(getComplaint())")
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
