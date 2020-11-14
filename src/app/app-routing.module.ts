import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormacionComponent} from './components/formacion/formacion.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nologgeado', component: LoginComponent },
  { path: 'formacion', component: FormacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
