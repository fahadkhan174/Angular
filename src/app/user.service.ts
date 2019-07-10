import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afStore: AngularFirestore) {
  }

  save(user: firebase.User) {
    this.afStore.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    }, { merge: true });
  }

  get(uid: string) {
    return this.afStore.collection('users').doc<AppUser>(uid).valueChanges();
  }
}
