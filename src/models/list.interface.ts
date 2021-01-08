export interface ITodoList {
  id: number;
  // title: string;
  // timestamp: number;
  // userId: number;
  productId: number;
  productName: string;
  price: number;
  // color: string;
  quantity: string;
  // size: string;
  // category: string;
  datepicker: string;
  stock: boolean;
  [key: string]: any; // help to lookup via index
}
