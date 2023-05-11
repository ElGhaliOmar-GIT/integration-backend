import { CodePromo } from "./codePromo";


export class User {
    id?: any;
    firstName: any;
    lastName: any;
    photo?: any;
    phoneNumber: any;
    email?: any;
    username: any;
    password: any;
    isActive?: any;
    accountStatus?: any;
    promoCode?: any;
  }
  
  export enum AccountStatus {
    Online = 'Online',
    Away = 'Away',
    Offline = 'Offline'
  }