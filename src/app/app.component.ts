import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  title = 'formacion';
  item$: Observable<any[]>;
  logged=false;
  errorMessage = '';
  irav='empresa';
  constructor(firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router ) {
    this.item$ = firestore.collection('usuarios').valueChanges();
  }

  ngOnInit():void{
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener).unsubscribe;
  }
  muser():string {
    let vuser=localStorage.getItem("email");
   return vuser.substring(0,vuser.indexOf('@'));
  }
  logout(): void {
    this.afAuth.signOut().then(() => {localStorage.setItem("email", ""); this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});
  }
  irA(cont:string):void{
    //(cont == 'ir') ? this.router.navigate(['/' + this.irav]) : this.irav=cont;
  }
  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      //console.log('Logged in :)');
      this.logged= true;
    } else {
      //console.log('Logged out :(');
      this.logged= false;
    }
  }

}
