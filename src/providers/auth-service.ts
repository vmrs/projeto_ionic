import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private authState: FirebaseAuthState;

  constructor( public auth$: AngularFireAuth) {
    this.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      console.log(JSON.stringify(this.authState));
    });
    
  }
  subscribe(observer){
    this.auth$.subscribe(observer);
  }
  get authenticated(): boolean {
    return this.authState != null;
  }
  signInWithPassword(user): firebase.Promise<FirebaseAuthState>{
    return this.auth$.login(user, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }
  signUpWithPassword(user): firebase.Promise<FirebaseAuthState>{
    return this.auth$.createUser(user);
  }

  signOut(): void{
    this.auth$.logout();
  }
}
