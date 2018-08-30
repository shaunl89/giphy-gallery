import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import reducer from './services/reducers';
import { getGIFS } from './services/sagas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import dotenv from 'dotenv';

dotenv.config();

const sagaMiddleware = createSagaMiddleware();

// initiate dev tools like redux for chrome
let devTools = f => f;
if (window && window.devToolsExtension) {
  devTools = window.devToolsExtension();
  console.log('React and Redux DevTools is ON');
}

// create redux store
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
);

// run sagas after store creation
sagaMiddleware.run(getGIFS)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
