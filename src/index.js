import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
//import { createLogger } from 'redux-logger';
//import thunkMiddleware from 'redux-thunk';
import './index.css';
 import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

//const logger = createLogger();
//const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger))
const store = createStore(searchRobots)

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
