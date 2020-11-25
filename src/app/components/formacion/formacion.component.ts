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
 }
