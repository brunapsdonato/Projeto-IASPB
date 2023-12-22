import { Component, OnInit } from '@angular/core';
import { UsuarioFirestoreService } from "../../shared/services/usuario-firestore.service"
import {Usuario} from "../../shared/modelo/usuario";
import {UserService} from "../../shared/services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioFirestoreService,
              private userService: UserService) {
    this.listaDeUsuarios = [];
  }

  public listaDeUsuarios: Usuario[];

  ngOnInit(): void {
    this.getUsuarios()
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.usuarioService.listar().subscribe(users => this.listaDeUsuarios = users)
    })
  }

  deletarUsuario(id: string) {
    this.usuarioService.deletarUsuario(id)


  }
}
