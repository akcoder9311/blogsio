import  conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

// create an acount inside the class and also create the new account by using the New Acount and defined client
export class AuthService {
   client = new Client();
   account;

   constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);

   }
// used inside appwrite methods
   async createAccount({email, password, name}) {
     try {
       const userAccount = await this.account.create(ID.unique(),email,password,name);

       if (userAccount) {
        // call another method
        return this.login({email , password});
       }else {
        return userAccount;
       }
     } catch (error) {
        throw error;
     }
   } 
// used inside appwrite methods
   async login({email,password}){
    try {
       return await this.account.createEmailPasswordSession(email, 
            password);
    } catch (error) {
        throw error;
    }
   }

// used inside appwrite methods
   async getCurrentUser(){
     try {
        return this.account.get();
     } catch (error) {
        console.log("appwrite service :: getcurrentuser :: error ", error);
     }
       return null;
   }

//    used inside appwrite methods
   async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout :: error ",error);
    }
   }
}

const authservice = new AuthService();

// expoting class
export default authservice;