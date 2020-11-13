import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      <h1 class="bg-primary">Ya</h1>
  <ul>
    <li *ngFor="let item of item$ | async">
      {{ item.login }}
    </li>
  </ul>
  `
})
export class AppComponent {
  title = 'formacion';
  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item$ = firestore.collection('usuarios').valueChanges();
  }
}
