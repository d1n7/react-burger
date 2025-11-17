import {createContext, useState} from "react";
import {authLoginAddress, authLogoutAddress} from "../services/api";
import {genRequest} from "./fetch";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const req = new Request(authLoginAddress, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password})
        });

        genRequest(req).then((res) => {
            if (res.success) {
                if (res.hasOwnProperty("refreshToken")) {
                    localStorage.setItem("refreshToken", res.refreshToken);
                }

                if (res.hasOwnProperty("accessToken")) {
                    const authToken = res.accessToken.split('Bearer ')[1]
                    const name = "token"

                    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(res.accessToken);
                }

                setUser({...data.user});
            }
        })

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
    }

    return {
        user,
        login,
        logout
    }
}