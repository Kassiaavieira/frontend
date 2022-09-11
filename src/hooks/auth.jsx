import { createContext, useContext, useState, useEffect } from "react";
export const AuthContext = createContext({});
import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@recrutaaqui:user", JSON.stringify(user));
      localStorage.setItem("@recrutaaqui:token", token);

      api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@recrutaaqui:user");
    localStorage.removeItem("@recrutaaqui:token");

    setData({}); // voltando o estado para vazio (tornando assim o user vazio)
  }
  useEffect(() => {
    const user = localStorage.getItem("@recrutaaqui:user");
    const token = localStorage.getItem("@recrutaaqui:token");
    if (token && user) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };