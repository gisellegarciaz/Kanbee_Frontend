import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const token = localStorage.getItem('tarefiz:token');
        return !!token;
    });
    const navigate = useNavigate();

    useEffect(() => {
        const recoverSession = async () => {
            const storedToken = localStorage.getItem('tarefiz:token');

            if (storedToken) {
                try {
                    api.defaults.headers.Authorization = `Bearer ${storedToken}`;
                    setIsAuthenticated(true);

                    const response = await api.get('/usuarios/me');
                    setUser(response.data);

                } catch (error) {
                    console.error("Erro ao validar token:", error);
                    localStorage.removeItem('tarefiz:token');
                    api.defaults.headers.Authorization = undefined;
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }

            setLoading(false);
        };

        recoverSession();
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await api.post('/auth/login', {
                "senha": password,
                "email": email
            });

            const { token } = response.data;

            // salva no localStorage para persistência
            localStorage.setItem('tarefiz:token', token);

            // configura o token no Axios
            api.defaults.headers.Authorization = `Bearer ${token}`;

            // busca o user autenticado
            const userResponse = await api.get('/usuarios/me');
            setUser(userResponse.data);

            setIsAuthenticated(true);

            // Mostra a notificação de sucesso AQUI, antes do redirecionamento
            toast.success('Login efetuado com sucesso! 🎉', {
                autoClose: 1500
            });

            // Aguarda um pouco antes de redirecionar para dar tempo da notificação aparecer
            await new Promise(resolve => setTimeout(resolve, 1000));

            // redireciona
            navigate('/home');

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Email ou senha incorretos.";
            toast.error("Erro no login: " + errorMessage);
            throw new Error(errorMessage);

        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('tarefiz:token');
        setIsAuthenticated(false);
        api.defaults.headers.Authorization = undefined;
        navigate('/');
    };

    return (
        <AuthContext.Provider
            value={{
                signed: isAuthenticated,
                user,
                loading,
                userRole: user?.cargo,
                login,
                logout,
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
    }

    return context;
};