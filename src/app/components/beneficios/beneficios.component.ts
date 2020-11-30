import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {
  errorMessage = '';
  pr='Planes';
  video='assets/videos/Plandecompensacion.mp4';
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
