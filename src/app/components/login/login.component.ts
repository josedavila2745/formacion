import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirestoreService } from './../../services/firestore.service';
import { FirebaseUIModule } from 'firebaseui-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Afiliado } from 'src/app/models/afiliado.model';




@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
 errorMessage = '';
 losAfiliados: any;
 Email = localStorage.getItem('email');
 current={nombres: "", apellidos: "", email: this.Email, movil: "", nota1: 0, nota2: 0, nota3: 0, nota4: 0, id: ""};
 loginForm: FormGroup;
 img1='assets/imgs/amor-al-projimo.jpg';
 img2='assets/imgs/muchos-afiliados.jpg';
 img3='assets/imgs/productos-angel-brena.jpg';
 item$: Observable<any[]>;
 constructor(private afAuth: AngularFireAuth,
   private router: Router,
   private fb: FormBuilder,
   private ngZone: NgZone,
   private afiliadosService: FirestoreService ) {
    }



 ngOnInit() :void {
  this.traerAfiliados();
   this.afAuth.user.subscribe(user => {if (user) {this.ngZone.run(() => {this.router.navigate(['/formacion'])})}})

   this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  this.afiliadosService.listar();
  }


 createUser() {
  this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
    .then(() => {this.current.email=this.loginForm.value.username;localStorage.setItem("current", JSON.stringify(this.current));localStorage.setItem("email", this.loginForm.value.username);this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});
 }

 signIn() {
  this.afAuth.signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
  .then((resp) => {this.Email=resp.user.email;/*console.log(JSON.stringify(resp));*/localStorage.setItem("email", this.Email); this.traerAfiliado(); this.router.navigate(['/formacion']);})
  .catch(response => {this.errorMessage = response.message;});
}
traerAfiliados(): void {
  this.afiliadosService.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe(data => {
      this.losAfiliados=data;
  });
}
traerAfiliado(): void {
  let data=this.losAfiliados;
  let current1=data.filter(e=>e.email==this.Email);current1=current1[0]; if (typeof current1 == "undefined") {current1=this.current};localStorage.setItem('current', JSON.stringify(current1)) ;
}

}
