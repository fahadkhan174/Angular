import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afDatabase: AngularFirestore) { }

  getCategories() {
    return this.afDatabase.collection('categories', ref => ref.orderBy('name', 'asc')).valueChanges();
  }
}
