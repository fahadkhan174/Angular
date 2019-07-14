import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public id: string, public data) {
        data.forEach(item => {
            this.items.push(new ShoppingCartItem(item.id, item.product, item.quantity));
        });
    }

    get totalItemsCount() {
        let count = 0;
        this.items.forEach(item => {
            count += item.quantity;
        });
        return count;
    }

    get totalPrice() {
        let sum = 0;
        this.items.forEach(item => {
            sum += item.totalPrice;
        });
        return sum;
    }

    getQuantity(product: Product) {
        let item = this.items.filter(item => item.product.id === product.id)[0];
        return item ? item.quantity : 0;
    }
}