import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private firestore: AngularFirestore) { }

  adicionarVoluntario(voluntario: any): Promise<any> {
    return this.firestore.collection('voluntarios').add(voluntario);
  }



}
