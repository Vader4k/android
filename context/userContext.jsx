import { createContext, useContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get();
      setUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  async function logOut() {}

  return (
    <userContext.Provider value={{ user, login, register, logOut }}>
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
