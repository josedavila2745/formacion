import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c11',
  templateUrl: './c11.component.html',
  styleUrls: ['./c11.component.scss']
})
export class C11Component implements OnInit {
  errorMessage = '';
  irav='empresa';
  benimg='assets/imgs/beneficios.jpg';
  capimg='assets/imgs/muchos-afiliados.jpg';
  empimg='assets/imgs/productos-angel-brena.jpg';
  prodimg='assets/imgs/productos.jpg';
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }
  muser():string {
    let vuser=localStorage.getItem("email");
   return vuser.substring(0,vuser.indexOf('@'));
 }
  logout(): void {
    this.afAuth.signOut().then(() => {localStorage.setItem("email", "");this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});

  }
  irA(cont:string):void{
    (cont == 'ir') ? this.router.navigate(['/' + this.irav]) : this.irav=cont;
  }
}
