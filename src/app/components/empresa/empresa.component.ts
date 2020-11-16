import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  errorMessage = '';
  empimg='assets/imgs/productos-angel-brena.jpg';
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
