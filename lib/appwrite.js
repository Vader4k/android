import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.BASEURL)
  .setProject(process.env.PROJECTID)
  .setPlatform("vader4k.shelfie");

  export const account = new Account(client);
  export const avatars = new Avatars(client);
