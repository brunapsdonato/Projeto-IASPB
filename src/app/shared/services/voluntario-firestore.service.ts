import { Injectable } from '@angular/core';
import {Voluntario} from "../modelo/voluntario";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, lastValueFrom, map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class VoluntarioFirestoreService {
  colecaoVoluntarios: AngularFirestoreCollection<Voluntario>;
  NOMECOLECAO = 'voluntarios';
  private firestore: any;


  constructor(private afs: AngularFirestore) {
    this.colecaoVoluntarios = afs.collection(this.NOMECOLECAO);
  }

  listar() : Observable<Voluntario[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    // @ts-ignore
    let lista = this.colecaoVoluntarios.get().pipe(map(document => document.docs.map(item => new Voluntario(item.id, item.data()))));
    // @ts-ignore
    return lista;
  }

  deletarVoluntario(id: string): Observable<void> {
    return from(this.afs.collection(this.NOMECOLECAO).doc(id).delete());
  }
  getVoluntarios() {
    return this.afs.collection('voluntarios').snapshotChanges();
  }
}
