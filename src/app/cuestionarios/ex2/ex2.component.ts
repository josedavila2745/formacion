import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../services/firestore.service';
import { FirebaseUIModule } from 'firebaseui-angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado.model';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
  cuest=[
    {
      "preg": "Debes activarte para obtener beneficios",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "Hay que activarse cada mes",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "Motivar a tu red te conviene",
      "resps": [
        "No",
        "No es importante",
        "Si"
      ],
      "vals": [
        0,
        0,
        2
      ]
    },
    {
      "preg": "Informar sobre lo que otros ganan",
      "resps": [
        "No conviene",
        "Es bueno para todos",
        "No se debe hacer"
      ],
      "vals": [
        0,
        2,
        0
      ]
    },
    {
      "preg": "Esforzarse para conseguir rango ",
      "resps": [
        "Es lo máximo",
        "No se hace por verguenza",
        "Molesta a la gente"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "Conocer los productos",
      "resps": [
        "Ayuda cuando s einforma a otros",
        "Es complicadoy daña el cerebro",
        "Da igual"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "Comprar regularmente favorece la salud y los ingresos",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "Qué conviene más",
      "resps": [
        "Trabajar dependiendo de otro",
        "Vender -<pays>-",
        "Afiliarte",
        "Afiliarte, comprar y promover compras",
        "Votar por Keiko"
      ],
      "vals": [
        0,
        0,
        2,
        2,
        0
      ]
    },
    {
      "preg": "Puedes ganarte",
      "resps": [
        "Un Viaje",
        "Una Laptop",
        "Un carro"
      ],
      "vals": [
        2,
        2,
        2
      ]
    },
    {
      "preg": "Angel Breña es",
      "resps": [
        "Puro Corazón y si cumple",
        "Amigo de Maduro "
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "Conviene atender las capacitaciones",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "informas sobre las premiaciones",
      "resps": [
        "Si",
        "No",
        "No me jodas"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "Estás pendientes de los anuncio y novedades",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    },
    {
      "preg": "Te interesa conseguir un mejor Rango",
      "resps": [
        "Si",
        "No, Keiko es mi Patas"
      ],
      "vals": [
        0,
        2
      ]
    },
    {
      "preg": "Quiers ganar",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        2,
        0
      ]
    }
  ];
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
    if(this.Current.nombres != "" ){this.tienename=this.Current.nombres; this.nota=this.Current.nota2};

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
    data.nota2 = this.nota;
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
