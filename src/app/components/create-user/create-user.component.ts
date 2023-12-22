import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  criarUsuario: FormGroup;
  submitted = false;
  private required: boolean = true;

  constructor(private fb: FormBuilder,
              private _userService: UserService) {
    this.criarUsuario = this.fb.group({
      nome: ['', Validators.required],
      dataNasc: ['', Validators.required],
      Documento: ['', Validators.required],
      servicoUtilizado: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }
  adicionarUsuario(){
    this.submitted = true;
    if(this.criarUsuario.invalid){
      return
    }
    const usuario: any = {
      nome: this.criarUsuario.value.nome,
      dataNasc: this.criarUsuario.value.dataNasc,
      Documento: this.criarUsuario.value.Documento,
      servicoUtilizado: this.criarUsuario.value.servicoUtilizado,
      fecharCriacao: new Date(),
      fecharAtualizacao: new Date()
    }
    this._userService.adicionarUsuario(usuario).then(() => {
      console.log('Cadastrado com sucesso!');
      this.criarUsuario.reset();
    }).catch(error => {
      console.log(error);
    })
  }
}
