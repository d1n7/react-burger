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
import {AuthProvider} from "./utils/auth";
import {ProfileUser} from "./components/pages/profile-user/profile-user";
import {ProfileOrders} from "./components/pages/orders/profile-orders";

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
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<App/>}/>
                            <Route path="/profile" element={<Profile/>}>
                                <Route index element={<ProfileUser/>}/>
                                <Route path="orders" element={<ProfileOrders/>}/>
                            </Route>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/forgot-password" element={<ForgotPassword/>}/>
                            <Route path="/reset-password" element={<ResetPassword/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </ErrorInform>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
