import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      switchMap((user) => {
        return this.userService.get(user.uid);
      }),
      map(appUser => appUser.isAdmin)
    );
  }
}
