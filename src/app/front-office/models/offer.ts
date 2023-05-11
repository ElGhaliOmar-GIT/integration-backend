export class Offer {
  idOffer: number;
  namePer: string;
  shopName: string;
  businessType: BusinessType;
  businessPhoneNumber: number;
  businessEmail: string;
  processingDate: Date;
  description: string;
  subtheme: string;
  startDate: Date;
  endDate: Date;
}

export enum BusinessType {
  Physical_Person = ' Physical Person',
  Business = 'Business',
  Other = ' Other',

}
