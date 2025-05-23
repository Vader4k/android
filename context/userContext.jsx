import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthCheked] = useState(false);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function getUser() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthCheked(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <userContext.Provider value={{ user, login, register, logout, authChecked }}>
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
