import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  adicionarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }



}
