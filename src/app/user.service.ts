import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afDatabase: AngularFirestore) {
  }

  save(user: firebase.User) {
    this.afDatabase.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    }, { merge: true });
  }

  get(uid: string) {
    return this.afDatabase.collection('users').doc<AppUser>(uid).valueChanges();
  }
}
