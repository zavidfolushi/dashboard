export interface IUsers {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  country: string;
  city: string;
  state: string;
  postCode: string;
  street: string;
  streetNumber: string;
}

export interface IOrders {
  number: number;
  price: number;
  currency: string;
  itemName: string;
  amount: number;
  createdAt: number;
  shippedAt: number;
}
