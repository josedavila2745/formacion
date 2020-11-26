import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Afiliado } from './../models/afiliado.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbPath = '/afiliados';

  afiliadosRef: AngularFirestoreCollection<Afiliado> = null;

  myArray: any[] = []

  constructor(private db: AngularFirestore) {
    this.afiliadosRef = db.collection(this.dbPath);
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

  create(afiliado: Afiliado): any {
    return this.afiliadosRef.add({ ...afiliado });
  }

  update(id: string, data: any): Promise<void> {
    return this.afiliadosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.afiliadosRef.doc(id).delete();
  }
 }
