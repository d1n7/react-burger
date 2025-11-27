import {createContext, useContext, useState} from "react";
import {authLoginAddress, authLogoutAddress, authUserAddress} from "../services/api";
import {genRequest} from "./fetch";


export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const auth = useAuthProvide();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const getCookieToken = () => {
    let token = undefined
    if (document.cookie.includes(";")) {
        document.cookie.split(';').forEach(t => {
            console.log("t", t);
            console.log("t.includes(\"token=\")", t.includes("token="));
            if (t.includes("token=")) {
                token = t.split("token=")[1]
            }
        })
    } else {
        if (document.cookie.includes("token=")) {
            token = document.cookie.split("token=")[1]
        }
    }
    return token;
}

export const deleteToken = () => {
    document.cookie = "token="
}

export const useAuthProvide = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const req = new Request(authUserAddress, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookieToken()
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });

        genRequest(req).then((res) => {
            console.log("res", res);
            if (res.success) {
                setUser({...res.user});
            }
        }).catch((err) => {
            console.log("err", err);
        })

    };

    const login = async (form) => {
        const req = new Request(authLoginAddress, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: form.email, password: form.password}),
        });

        genRequest(req).then((res) => {
            if (res.success) {
                if (res.hasOwnProperty("refreshToken")) {
                    localStorage.setItem("refreshToken", res.refreshToken);
                }

                if (res.hasOwnProperty("accessToken")) {
                    const authToken = res.accessToken.split('Bearer ')[1]
                    const name = "token"

                    const expires = new Date();
                    expires.setTime(expires.getTime() + 20 * 60 * 1000);

                    document.cookie = `${name}=${encodeURIComponent(authToken)};expires=${expires.toUTCString()}`;
                }

                setUser({...res.user});
            }
        })
    }

    const logout = () => {
        const req = new Request(authLogoutAddress, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: localStorage.getItem("refreshToken")}),
        });

        genRequest(req).then((res) => {
            if (res.success) {
                console.log(res);
                setUser(null)
                deleteToken()
            } else {
                alert("выйти из системы не удалось");
            }
        })

    }

    return {
        user,
        getUser,
        login,
        logout
    }
}