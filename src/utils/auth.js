import {createContext, useContext, useState} from "react";
import {authLoginAddress, authLogoutAddress} from "../services/api";
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
                    console.log(expires)

                    const cookie = `${name}=${encodeURIComponent(authToken)};expires=${expires.toUTCString()}`;

                    console.log("cookie", cookie);
                    document.cookie = cookie
                }

                console.log("getCookieToken", getCookieToken(document.cookie))

                console.log("res", res);
                setUser({...res.user});
            }
        })
    }

    const logout = () => {
        if (!user) {
            console.log("user is null", user)
        }

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
            } else {
                alert("выйти из системы не удалось");
            }
        })

    }


    return {
        user,
        login,
        logout
    }
}