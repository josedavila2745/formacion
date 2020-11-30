import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { LiderazgoComponent } from './components/liderazgo/liderazgo.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';

import { C11Component } from './contenidos/c11/c11.component';
import { Ex1Component } from './cuestionarios/ex1/ex1.component';
import { Ex2Component } from './cuestionarios/ex2/ex2.component';
import { Ex3Component } from './cuestionarios/ex3/ex3.component';
import { Ex4Component } from './cuestionarios/ex4/ex4.component';

import { Diploma1Component } from './diplomas/diploma1/diploma1.component';
import { Diploma2Component } from './diplomas/diploma2/diploma2.component';
import { Diploma3Component } from './diplomas/diploma3/diploma3.component';
import { Diploma4Component } from './diplomas/diploma4/diploma4.component';




const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormacionComponent,
    ProductosComponent,
    ProductoComponent,
    EmpresaComponent,
    BeneficiosComponent,
    LiderazgoComponent,
    CapacitacionesComponent,
    C11Component,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Diploma1Component,
    Diploma2Component,
    Diploma3Component,
    Diploma4Component
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
     AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  //exports: [C11Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








