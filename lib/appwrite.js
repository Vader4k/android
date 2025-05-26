import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT } from "@env";

export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT)

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);