import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import ErrorInform from "./components/error-inform/error-inform";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from "./services";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const middlewares = [thunk]

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, enhancer);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorInform>
                <App/>
            </ErrorInform>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
