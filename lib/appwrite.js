import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, APPWRITE_PLATFORM } from "@env";

export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT)
  // .setPlatform(APPWRITE_PLATFORM);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);