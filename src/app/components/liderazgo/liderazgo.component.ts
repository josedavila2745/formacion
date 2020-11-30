import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
//import { Ex4Component } from './../../cuestionarios/ex4/ex4.component';


@Component({
  selector: 'app-liderazgo',
  templateUrl: './liderazgo.component.html',
  styleUrls: ['./liderazgo.component.scss']
})
export class LiderazgoComponent implements OnInit {
  errorMessage = '';
  capimg='assets/imgs/muchos-afiliados.jpg';
  aap1 = 'assets/imgs/amor-al-projimo1.jpg';
  aap2 = 'assets/imgs/amor-al-projimo2.jpg';
  aap3 = 'assets/imgs/amor-al-projimo3.jpg';
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }
  muser():string {
    return localStorage.getItem("email");
  }
  logout(): void {
    this.afAuth.signOut().then(() => {localStorage.setItem("email", "");localStorage.setItem("current", "");this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});

  }
  irA(cont:string):void{
    this.router.navigate(['/formacion']);
  }
}
