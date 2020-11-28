import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../services/firestore.service';
import { FirebaseUIModule } from 'firebaseui-angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado.model';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {
  cuest=[{"preg":"Sientes  odio hacia otra persona","resps":["Si","No"],"vals":[0,2]},{"preg":"Te llevas bien con tus vecinos","resps":["Si","No"],"vals":[2,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Pandemia es","resps":["Un baile moderno","Una calamidad mundial","Anemia del pan"],"vals":[0,2,0]},{"preg": "Amor al Prójimo es","resps":["Amar a un señor llamado Prójimo","Apoyar a otro para pedir su voto","Preocuparse y ayudar a los demás"],"vals":[0,0,2]},{"preg": "A cuántas personas has ayudado este año","resps":["A ninguna","A menos de 3","A más de 5"],"vals":[0,2,2]},{"preg": "Te lavas las manos al llegar a casa","resps":["Si","No"],"vals":[2,0]},{"preg": "Si alguien no lleva facial en el bus","resps":["Lo felicitas","Lo imitas","Le reclamas","Lo golpeas","No haces nada"],"vals":[0,0,2,0,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Te preocupa el COVID 19","resps":["Si","No"],"vals":[2,0]},{"preg": "Respetas la cuarentena","resps":["Si","No"],"vals":[2,0]},{"preg": "Mantienes la distancia de metro y medio","resps":["Si","A veces","No"],"vals":[2,0,0]},{"preg": "Comes saludable","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a las autoridades","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a los infectados","resps":["Si","No"],"vals":[2,0]}];
  nota=0;
  notap=0;
  vnotas=[0,0,0,0,0,0,0,0,0,0];
  datos=false;
  vv=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  vr=[]; ps10=[];
  botonenviar='Enviar';
  constructor(private afiliadosService: FirestoreService, private router: Router) { }

  public afiliadosList: Afiliado[] = [];
  public tienename= "";
  losAfiliados=[];
  Email = localStorage.getItem('email');
  Current=JSON.parse(localStorage.getItem('current'));
  registrado = (this.Current.nombres  == "") ? true : false;


  submitted = false;

  ngOnInit(): void {
    let vt=this.vv;
    for(let cc of [0,1,2,3,4]){
        let vl=vt.length;
        let dd1=[];
        let yy=Math.round(Math.random()*vl);
        dd1= vt.filter((e,i)=>i !=yy );
        vt= dd1;
    }
    this.vr=vt;
    this.vr.map(v => this.ps10.push(this.cuest[v]));
    //console.log(JSON.stringify(this.ps10));
    //console.log(this.getAfiliados());
    //this.saveAfiliado({nombres:"Angel",apellidos:"Breña",email:"perumundo@gmail.com",movil:"555555",nota1:0,nota2:0,nota3:0,nota4:0})
    this.traerAfiliados();
    if(this.Current.nombres != "" ){this.tienename=this.Current.nombres; this.nota=this.Current.nota4};

  }

  traerAfiliados(): void {
    this.afiliadosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ida: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {

      //let current=data.filter(e=>e.email==this.Email); localStorage.setItem('current', JSON.stringify(current[0]) );
      //let current1=data.filter(e=>e.email==this.Email);current1=current1[0]; if (typeof current1 == "undefined") {current1=this.current};localStorage.setItem('current', JSON.stringify(current1)) ;
      this.losAfiliados=data;
    });
  }

  registrar(n:string, l:string): void {
    let fh= new Date();
    let fhs = fh.getTime().toString();
    let afiliado= {nombres: n, apellidos: l, email: this.Email, movil: "", nota1: 0, nota2: 0, nota3: 0, nota4: 0, id: fhs};
    this.afiliadosService.create(afiliado).then(() => {
      localStorage.setItem('current', JSON.stringify(afiliado) );
      this.tienename=n;
      console.log('Created new item successfully!');
      this.submitted = true;
      this.registrado=true;
      this.router.navigate(['/capacitaciones']);
    });
  }

  updateAfiliado(): void {
    const data = JSON.parse(localStorage.getItem('current'));
    this.botonenviar='Intenta de Nuevo'
    this.nota=this.notap;
    data.nota4 = this.nota;
    let afilx = this.losAfiliados.filter(e=>e.email==data.email);
    console.log(JSON.stringify(afilx));
    this.afiliadosService.update(afilx[0].ida, data)
      .then(() => localStorage.setItem('current', JSON.stringify(data) ))
      .catch(err => console.log(err));
    this.router.navigate(['/capacitaciones']);
  }
  calNota(i:number,v:number){
      this.vnotas[i]=v;
      this.notap=this.vnotas.reduce((a, b) => a + b, 0);
      //console.log(this.nota);
  }
  /*
  getAfiliados(){
    console.log(this.afiliadosService.getAll());
  }
  saveAfiliado(e:Afiliado):void{
    this.afiliadosService.create(e);
  }*/
  getAfiliados(): void {
    this.afiliadosService.getAfiliados().subscribe((res) => {
      this.afiliadosList = res.map((afil) => {   return { ...afil.payload.doc.data() as {}, id: afil.payload.doc.id  } as Afiliado;
      });
    });
  }
}

