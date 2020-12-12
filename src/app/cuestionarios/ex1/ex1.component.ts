//*************************/
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../services/firestore.service';
import { FirebaseUIModule } from 'firebaseui-angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado.model';
import { Tema, Preg } from 'src/app/models/tema.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {
  test: Observable<Tema>
  cuest: Preg[]
/*
  cuest=[
    {
      "preg": "Productos Angel Breña es un MLM",
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
      "preg": "Los afiliados compran a menor precio",
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
      "preg": "Cuánto se gana si te afilias",
      "resps": [
        "Nada",
        "Más o menos",
        "Mucho"
      ],
      "vals": [
        0,
        0,
        2
      ]
    },
    {
      "preg": "Los productos de la empresa son",
      "resps": [
        "Medicina",
        "Alimentos funcionales",
        "pura paja"
      ],
      "vals": [
        0,
        2,
        0
      ]
    },
    {
      "preg": "El Multivitamínico sirve ",
      "resps": [
        "Para fortalecer el organismo",
        "Para nada es solo una bebida",
        "Para engordar"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "El Nopaloe sirve",
      "resps": [
        "Para atraer moscas",
        "Favorecer la evacuación",
        "Favorecer el interior de estómago"
      ],
      "vals": [
        0,
        2,
        2
      ]
    },
    {
      "preg": "Cualquiera puede comprar productos",
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
      "preg": "Qué producto no pertenece a la empresa",
      "resps": [
        "Bicarbonato de sodio",
        "Aromaterapia",
        "Agua San Luis",
        "Nutrinmunocan",
        "Aceite de magnesio"
      ],
      "vals": [
        0,
        0,
        2,
        0,
        0
      ]
    },
    {
      "preg": "Para la próstata recomendarías ",
      "resps": [
        "Maca Negra",
        "Inka Cola",
        "Perfumes"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "Se puede afiliar ilimitadamente",
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
      "preg": "Conviene seguir las recomendaciones de uso",
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
      "preg": "Conviene consultar al médíco",
      "resps": [
        "Si",
        "No",
        "Da igual"
      ],
      "vals": [
        2,
        0,
        0
      ]
    },
    {
      "preg": "Un afiliado puede vender a otro",
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
      "preg": "Puedes mezclar productos coon otros no recomendados",
      "resps": [
        "Si",
        "No"
      ],
      "vals": [
        0,
        2
      ]
    },
    {
      "preg": "Para consumir debes afiliarte",
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
  */
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
    this.getCuest();
    //console.log(JSON.stringify(this.ps10));
    //console.log(this.getAfiliados());
    //this.saveAfiliado({nombres:"Angel",apellidos:"Breña",email:"perumundo@gmail.com",movil:"555555",nota1:0,nota2:0,nota3:0,nota4:0})
    this.traerAfiliados();
    if(this.Current.nombres != "" ){this.tienename=this.Current.nombres; this.nota=this.Current.nota1};
    this.vr.map(v => this.ps10.push(this.cuest[v]));

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
      this.router.navigate(['/empresa']);
    });
  }

  updateAfiliado(): void {
    const data = JSON.parse(localStorage.getItem('current'));
    this.botonenviar='Intenta de Nuevo'
    this.nota=this.notap;
    data.nota1 = this.nota;
    let afilx = this.losAfiliados.filter(e=>e.email==data.email);
    console.log(JSON.stringify(afilx));
    this.afiliadosService.update(afilx[0].ida, data)
      .then(() => localStorage.setItem('current', JSON.stringify(data) ))
      .catch(err => console.log(err));
    this.router.navigate(['/empresa']);
  }
  calNota(i:number,v:number){
      this.vnotas[i]=v;
      this.notap=this.vnotas.reduce((a, b) => a + b, 0);
      //console.log(this.nota);
  }
  getCuest(){
    this.test = this.afiliadosService.getTema('empresa')
    //this.cuest= cuc.cuest;
    this.cuest=this.test['cuest']
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

