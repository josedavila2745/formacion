import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  title = 'formacion';
  item$: Observable<any[]>;
  logged=false;
  constructor(firestore: AngularFirestore, private angularFireAuth:AngularFireAuth ) {
    this.item$ = firestore.collection('usuarios').valueChanges();
  }
  ngOnInit():void{
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener).unsubscribe;
  }

  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
      this.logged= true;
    } else {
      console.log('Logged out :(');
      this.logged= false;
    }
  }

}
