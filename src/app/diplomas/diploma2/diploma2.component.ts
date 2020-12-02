import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-diploma2',
  templateUrl: './diploma2.component.html',
  styleUrls: ['./diploma2.component.scss']
})
export class Diploma2Component  {
  datos=JSON.parse(localStorage.getItem('current'));
  diploma='assets/imgs/diploma2.jpg';
  nota=this.datos.nota2;
  nombre=this.datos.nombres+" "+this.datos.apellidos;

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  constructor(private router: Router) { }
  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
  regresar(){
    this.router.navigate(['/beneficios']);
  }
}



