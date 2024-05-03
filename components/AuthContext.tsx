'use client'
import { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios'
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import { env } from "../config";


type AuthContextType = {
    auth: { user: any, token: string };
    login: any;
    signup: any;
    logout: any;
    getUserDetail: any;
    resetPassword: any;
    forgotPassword: any;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children } :any) => {
    const API_URL = env.API_URL;
    const router = useRouter()

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    axios.defaults.headers.common["Authorization"] = auth?.token

    const login = async (credential:any) => {
        try {
            const { data } = await axios.post(`${API_URL}/auth/login`, credential);

            if (data?.access_token) {
                setTimeout(function () {
                    toast.success("Login successfully")
                }, 500);
                setAuth({
                    user: null,
                    token: data.access_token
                })
                localStorage.setItem('auth', JSON.stringify(data.access_token))
                return null;
            }
        } catch (error :any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage }
                } else {
                    return { error: true, errorMessage: [errorMessage] }
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const signup = async (credential :any) => {
        try {
            const { data } = await axios.post(`${API_URL}/user/create`, credential);
            if (data?.email) {
                toast.success("Accout Created Successfully")
                setAuth({
                    user: null,
                    token: data.access_token
                })
                localStorage.setItem('auth', JSON.stringify(data.access_token))
                return null
            }
        } catch (error:any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage }
                } else {
                    return { error: true, errorMessage: [errorMessage] }
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const resetPassword = async (credential:any) => {
        try {
            const { data } = await axios.post(`${API_URL}/auth/reset-password`, credential);
            if (data?.error === false) {
                toast.success(data?.message)
                return { error: false}
            }
        } catch (error:any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage }
                } else {
                    return { error: true, errorMessage: [errorMessage] }
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const forgotPassword = async (email:any) => {
        try {
            const { data } = await axios.post(`${API_URL}/auth/forgot-password`, { email });
            if (data?.error === false) {
                toast.success("Email send sucessfully")
                return null
            }
        } catch (error:any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage }
                } else {
                    return { error: true, errorMessage: [errorMessage] }
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const logout = async () => {
        try {
            const data = localStorage.getItem('auth');
            if (data) {
                const token = JSON.parse(data)
                await axios.post(
                    `${API_URL}/auth/logout`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }
                );
                localStorage.removeItem("auth");
                setAuth({
                    user: null,
                    token: ""
                });
            }
        } catch (error:any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage };
                } else {
                    return { error: true, errorMessage: [errorMessage] };
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    const getUserDetail = async (userId: string) => {
        try {
            const data = await axios.get(`${API_URL}/user/user-detail`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`,
                    }
                })

            return { error: false, user: data }
        } catch (error:any) {
            if (error.response) {
                if (error.response.status == 401) {
                    localStorage.clear()
                    window.location.reload();
                    router.push("/")
                }

                const errorMessage = error.response.data.message;
                if (Array.isArray(errorMessage)) {
                    return { error: true, errorMessage }
                } else {
                    return { error: true, errorMessage: [errorMessage] }
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const access_token = JSON.parse(data)

            setAuth({
                user: null,
                token: access_token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, login, signup, logout, getUserDetail, resetPassword, forgotPassword }}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }