import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  logged=false
  constructor(private angularFireAuth:AngularFireAuth) { }
}
