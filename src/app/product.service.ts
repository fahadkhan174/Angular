import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afStore: AngularFirestore) {
  }

  create(product) {
    return this.afStore.collection('products').add(product);
  }

  getAll() {
    return this.afStore.collection<Product>('products')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  get(productId) {
    return this.afStore.collection('products').doc(productId).valueChanges();
  }

  update(productId, product) {
    return this.afStore.collection('products').doc(productId).update(product);
  }

  delete(productId) {
    return this.afStore.collection('products').doc(productId).delete();
  }
}
