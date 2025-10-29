import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import ErrorInform from "./components/error-inform/error-inform";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from "./services";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/pages/login/login-page";
import {RegisterPage} from "./components/pages/register/register-page";
import {Page404} from "./components/pages/404/404";
import {ForgotPassword} from "./components/pages/forgot-password/forgot-password";
import {ResetPassword} from "./components/pages/reset-password/reset-password";
import {Profile} from "./components/pages/profile/profile";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const middlewares = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, enhancer);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorInform>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/reset-password" element={<ResetPassword/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
            </ErrorInform>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
