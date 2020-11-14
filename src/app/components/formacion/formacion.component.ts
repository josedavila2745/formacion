import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {
  errorMessage = '';
  constructor(private afAuth: AngularFireAuth, private router: Router,) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.afAuth.signOut().then(() => {this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});

}
}
