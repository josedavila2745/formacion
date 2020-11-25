import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  logged=false;
  cuest=[{"preg":"Sientes  odio hacia otra persona","resps":["Si","No"],"vals":[0,2]},{"preg":"Te llevas bien con tus vecinos","resps":["Si","No"],"vals":[2,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Pandemia es","resps":["Un baile moderno","Una calamidad mundial","Anemia del pan"],"vals":[0,2,0]},{"preg": "Amor al Prójimo es","resps":["Amar a un señor llamado Prójimo","Apoyar a otro para pedir su voto","Preocuparse y ayudar a los demás"],"vals":[0,0,2]},{"preg": "A cuántas personas has ayudado este año","resps":["A ninguna","A menos de 3","A más de 5"],"vals":[0,2,2]},{"preg": "Te lavas las manos al llegar a casa","resps":["Si","No"],"vals":[2,0]},{"preg": "Si alguien no lleva facial en el bus","resps":["Lo felicitas","Lo imitas","Le reclamas","Lo golpeas","No haces nada"],"vals":[0,0,2,0,0]},{"preg": "A cuántas fiestas has ido","resps":["A ninguna","A una o dos","A más de 2"],"vals":[2,0,0]},{"preg": "Te preocupa el COVID 19","resps":["Si","No"],"vals":[2,0]},{"preg": "Respetas la cuarentena","resps":["Si","No"],"vals":[2,0]},{"preg": "Mantienes la distancia de metro y medio","resps":["Si","A veces","No"],"vals":[2,0,0]},{"preg": "Comes saludable","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a las autoridades","resps":["Si","No"],"vals":[2,0]},{"preg": "Ayudas a los infectados","resps":["Si","No"],"vals":[2,0]}];

  constructor(private angularFireAuth:AngularFireAuth) { }
}
