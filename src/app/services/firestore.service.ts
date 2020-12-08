import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Afiliado } from './../models/afiliado.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbPath = '/afiliados';
  item$: Observable<any[]>;
  tem2:any;
  afiliadosRef: AngularFirestoreCollection<Afiliado> = null;

  myArray: any[] = []

  constructor(private db: AngularFirestore) {
    this.afiliadosRef = db.collection(this.dbPath);
    //this.item$=db.collection<Afiliado>(this.dbPath).doc('creadoid').get();
    this.item$=db.collection(this.dbPath).valueChanges();
    /*this.db.collection("afiliados").get().subscribe((ss) => {
      ss.docs.forEach((doc) => {this.myArray.push(doc.data());});
  });*/
  }

  getAll(): AngularFirestoreCollection<Afiliado> {
    return this.afiliadosRef;
  }


  getAfiliados() {
    return this.db.collection('afiliados').snapshotChanges();
  }

  getAll2() {
    return this.myArray;
  }

  addA(){
    this.afiliadosRef.add({
      id: '2745',
      apellidos: "Ada",
      nombres: "Lovelace",
      email: "ada@gmail.com",
      movil:'914346750',
      nota1: 1,nota2: 2,nota3: 3,nota4: 4
  })

  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  }

  listar(){
    //this.item$.forEach(afls => console.log([...afls]));
    //
    //') .get().forEach(doc => {console.log(doc.docs[0]);})}
    this.item$.forEach(e => console.log([...e]))
    //this.tem2.get().then(u => console.log(u));
    this.db.collection('afiliados').doc('creadoid').get().subscribe(e => console.log(e.data()))
  }

  create(afiliado: Afiliado): any {
    return this.afiliadosRef.add({ ...afiliado });
  }

  create2(afiliado: Afiliado): any {
    return this.afiliadosRef.doc('creadoid').set({ ...afiliado });
  }

  update(id: string, data: any): Promise<void> {
    return this.afiliadosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.afiliadosRef.doc(id).delete();
  }
 }
