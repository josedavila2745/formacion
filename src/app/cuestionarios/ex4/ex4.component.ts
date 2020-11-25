import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit {
  cuest=[{"preg":"Sientes  odio hacia otra persona","resps":["Si","No"],"vals":[0,2]},{"preg":"Te llevas bien con tus vecinos","resps":["Si","No"],"vals":[2,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Pandemia es","resps":["Un baile moderno","Una calamidad mundial","Anemia del pan"],"vals":[0,2,0]},{"preg": "Amor al Prójimo es","resps":["Amar a un señor llamado Prójimo","Apoyar a otro para pedir su voto","Preocuparse y ayudar a los demás"],"vals":[0,0,2]},{"preg": "A cuántas personas has ayudado este año","resps":["A ninguna","A menos de 3","A más de 5"],"vals":[0,2,2]},{"preg": "Te lavas las manos al llegar a casa","resps":["Si","No"],"vals":[2,0]},{"preg": "Si alguien no lleva facial en el bus","resps":["Lo felicitas","Lo imitas","Le reclamas","Lo golpeas","No haces nada"],"vals":[0,0,2,0,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Te preocupa el COVID 19","resps":["Si","No"],"vals":[2,0]},{"preg": "Respetas la cuarentena","resps":["Si","No"],"vals":[2,0]},{"preg": "Mantienes la distancia de metro y medio","resps":["Si","A veces","No"],"vals":[2,0,0]},{"preg": "Comes saludable","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a las autoridades","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a los infectados","resps":["Si","No"],"vals":[2,0]}];
  nota=0;
  vnotas=[0,0,0,0,0,0,0,0,0,0];
  datos=false;
  vv=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  vr=[]; ps10=[];
  constructor() { }

  ngOnInit(): void {
    let vt=this.vv;
    for(let cc of [0,1,2,3,4]){
        let vl=vt.length;
        let dd1=[];
        let yy=Math.round(Math.random()*vl);
        dd1= vt.filter((e,i)=>i !=yy );
        vt=dd1;
    }
    this.vr=vt;
    this.vr.map(v => this.ps10.push(this.cuest[v]));
    //console.log(JSON.stringify(this.ps10));
  }

  calNota(i:number,v:number){
      this.vnotas[i]=v;
      this.nota=this.vnotas.reduce((a, b) => a + b, 0);
      //console.log(this.nota);
  }

}
