import { Injectable } from '@angular/core';
import {Usuario} from "../modelo/usuario";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, lastValueFrom, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';


  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar() : Observable<Usuario[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    // @ts-ignore
    let lista = this.colecaoUsuarios.get().pipe(map(document => document.docs.map(item => new Usuario(item.id, item.data()))));
    // @ts-ignore
    return lista;
  }

  deletarUsuario(id: string): Observable<void> {
    return from(this.afs.collection(this.NOME_COLECAO).doc(id).delete());
  }
  getUsuarios() {
    return this.afs.collection('usuarios').snapshotChanges();
  }
}
