import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appUser: AppUser;

  constructor(private afDatabase: AngularFirestore) {
  }

  save(user: firebase.User) {
    this.afDatabase.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    }, { merge: true });
  }

  get(uid: string) {
    return this.afDatabase.collection('users').doc(uid).get().pipe(
      map(doc => {
        return (doc.data());
      })
    );
  }
}
