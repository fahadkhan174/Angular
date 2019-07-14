import { CategoryService } from '../category.service';

export interface Product {
    id?: string,
    title: string,
    price: number,
    category: string,
    imageUrl: string
}