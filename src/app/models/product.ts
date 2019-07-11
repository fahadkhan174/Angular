import { CategoryService } from '../category.service';

export interface Product {
    title: string,
    price: number,
    category: string,
    imageUrl: string
}