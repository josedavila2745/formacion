import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-diploma3',
  templateUrl: './diploma3.component.html',
  styleUrls: ['./diploma3.component.scss']
})
export class Diploma3Component implements OnInit {
  datos=JSON.parse(localStorage.getItem('current'));
  diploma='assets/imgs/diploma4.jpg';
  nota=this.datos.nota4;
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
    this.router.navigate(['/capacitaciones']);
  }
}



