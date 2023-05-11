export class Claim {
  idClaim: number;
  fullName: string;
  orderNumber: string;
  productRef: string;
  creationDate: Date;
  treated: boolean;
  processingDate: Date;
  subject: ClaimSubject;
  subtheme: string;
  description: string;
  cfile!: string;
  qrcode: any;
  client: any;
}

export enum ClaimSubject {
  None = ' None',
  Delivery_and_Tracking = 'Delivery and Tracking',
  Purchases_and_payments = 'Purchases and payments',
  Gift_Cards_and_Promotions = ' Gift Cards and Promotions',
  My_Orders_and_Returns = 'My Orders and Returns',
  Stock_of_products_and_well_being = 'Stock of products and well-being',
  Other = ' Other',

}
