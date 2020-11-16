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
