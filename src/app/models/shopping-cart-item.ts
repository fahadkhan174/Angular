import { Product } from './product';

export class ShoppingCartItem {

    constructor(public id: string, public product: Product, public quantity: number) { }

    get totalPrice() {
        return this.product.price * this.quantity;
    }
}