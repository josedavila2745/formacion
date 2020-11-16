import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { Todo } from './../../models/todo.model';



@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
 errorMessage = '';
 loginForm: FormGroup;
 img1='assets/imgs/amor-al-projimo.jpg';
 img2='assets/imgs/muchos-afiliados.jpg';
 img3='assets/imgs/productos-angel-brena.jpg';
 constructor(private afAuth: AngularFireAuth,
   private router: Router,
   private fb: FormBuilder,
   private ngZone: NgZone) { }



 ngOnInit() :void {
   this.afAuth.user.subscribe(user => {if (user) {this.ngZone.run(() => {this.router.navigate(['/formacion'])})}})

   this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  }


 createUser() {
  this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
    .then(() => {this.router.navigate(['/nologgeado']);})
    .catch(response => {this.errorMessage = response.message;});
 }

 signIn() {
  this.afAuth.signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
  .then((resp) => {console.log(JSON.stringify(resp));localStorage.setItem("email", resp.user.email);this.router.navigate(['/formacion']);})
  .catch(response => {this.errorMessage = response.message;});
}
}
