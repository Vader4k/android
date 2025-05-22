import { createContext, useContext, useMemo, useState } from "react";

export const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {}

  async function register(email, password) {}

  async function logOut() {}

  const memoriedUser = useMemo(() => {
    user;
  }, []);

  return (
    <userContext.Provider value={{ memoriedUser, login, register, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
