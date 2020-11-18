import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormacionComponent} from './components/formacion/formacion.component';
import { EmpresaComponent} from './components/empresa/empresa.component';
import { ProductosComponent} from './components/productos/productos.component';
import { BeneficiosComponent} from './components/beneficios/beneficios.component';
import { CapacitacionesComponent} from './components/capacitaciones/capacitaciones.component';
import { C11Component } from './contenidos/c11/c11.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nologgeado', component: LoginComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'c11', component: C11Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
