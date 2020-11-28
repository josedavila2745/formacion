import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormacionComponent} from './components/formacion/formacion.component';
import { EmpresaComponent} from './components/empresa/empresa.component';
import { BeneficiosComponent} from './components/beneficios/beneficios.component';
import { CapacitacionesComponent} from './components/capacitaciones/capacitaciones.component';
import { LiderazgoComponent } from './components/liderazgo/liderazgo.component';
import { C11Component } from './contenidos/c11/c11.component';
import { Diploma4Component } from './diplomas/diploma4/diploma4.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nologgeado', component: LoginComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'liderazgo', component: LiderazgoComponent },
  { path: 'diploma4', component : Diploma4Component},
  { path: 'c11', component: C11Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
