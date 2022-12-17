export interface Product {
    productName: string;
    productPrice: number;
}

export interface userProduct  {
    product: Product;
    frequencyPerDay: number;
    quantity: number; 

}

export interface ShoppingList {
    date : Date;
    list : userProduct[];
}