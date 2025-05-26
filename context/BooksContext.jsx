import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { DATABASE_ID, COLLECTION_ID } from "@env";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUserContext } from "../context/userContext";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUserContext();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );

      setBooks(response.documents)
      console.table(response.documents)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user?.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    if (user) {
      fetchBooks()
    } else {
      setBooks([])
    }
  },[user])

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
};
