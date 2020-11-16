import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.scss']
})
export class CapacitacionesComponent implements OnInit {
  errorMessage = '';
  capimg='assets/imgs/muchos-afiliados.jpg';
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }
  muser():string {
    return localStorage.getItem("email");
  }
  logout(): void {
    this.afAuth.signOut().then(() => {localStorage.setItem("email", "");this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});

  }
  irA(cont:string):void{
    this.router.navigate(['/formacion']);
  }
}
