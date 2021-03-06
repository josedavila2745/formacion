import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-diploma1',
  templateUrl: './diploma1.component.html',
  styleUrls: ['./diploma1.component.scss']
})
export class Diploma1Component  {
  datos=JSON.parse(localStorage.getItem('current'));
  diploma='assets/imgs/diploma1.jpg';
  nota=this.datos.nota1;
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
    this.router.navigate(['/empresa']);
  }
}



