import { Component, OnInit } from '@angular/core';
import {VoluntarioFirestoreService} from "../../shared/services/voluntario-firestore.service";
import {VolunteerService} from "../../shared/services/volunteer.service";
import {Voluntario} from "../../shared/modelo/voluntario";


@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.scss']
})
export class ListVolunteerComponent implements OnInit {

  voluntarios: any[] = [];

  constructor(private voluntarioService: VoluntarioFirestoreService,
              private volunteerService: VolunteerService) {
    this.listaDeVoluntarios = [];
  }

  public listaDeVoluntarios: Voluntario[];

  ngOnInit(): void {
    this.getVoluntarios()
  }

  getVoluntarios() {
    this.voluntarioService.getVoluntarios().subscribe(data => {
      console.log(data);
      this.voluntarioService.listar().subscribe(volunteer => this.listaDeVoluntarios = volunteer)
    })
  }

  deletarVoluntario(id: string) {
    this.voluntarioService.deletarVoluntario(id)


  }
}
