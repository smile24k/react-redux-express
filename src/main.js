import React from 'react'
import {render} from 'react-dom';

import HomePage from "./container/main/main";

import FastClick from 'fastclick'
import { Router, Route, browserHistory, Redirect, IndexRoute} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer/main'

window.addEventListener('load', () => {
    FastClick.attach(document.body);
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);


const history = syncHistoryWithStore(browserHistory, store);

render((
		<Provider store={store}>
        	<Router onUpdate={() => window.scrollTo(0,0)} history={history}>
        		<Route path="/main/:id" component={HomePage}/>
        	</Router>
		</Provider>
	),
  document.getElementById('app')
);