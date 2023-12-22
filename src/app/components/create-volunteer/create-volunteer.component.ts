import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VolunteerService} from "../../shared/services/volunteer.service";

@Component({
  selector: 'app-create-volunteer',
  templateUrl: './create-volunteer.component.html',
  styleUrls: ['./create-volunteer.component.scss']
})
export class CreateVolunteerComponent implements OnInit {
  criarVoluntario: FormGroup;
  submitted = false;
  private required: boolean = true;
  constructor(private fb: FormBuilder,
              private _volunteerService: VolunteerService) {
    this.criarVoluntario = this.fb.group({
      nome: ['', Validators.required],
      dataNasc: ['', Validators.required],
      contato: ['', Validators.required],
      funcao: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }
  adicionarVoluntario(){
    this.submitted = true;
    if(this.criarVoluntario.invalid){
      return
    }
    const voluntario: any = {
      nome: this.criarVoluntario.value.nome,
      dataNasc: this.criarVoluntario.value.dataNasc,
      contato: this.criarVoluntario.value.contato,
      funcao: this.criarVoluntario.value.funcao,
      fecharCriacao: new Date(),
      fecharAtualizacao: new Date()
    }
    this._volunteerService.adicionarVoluntario(voluntario).then(() => {
      console.log('Cadastrado com sucesso!');
      this.criarVoluntario.reset();
    }).catch(error => {
      console.log(error);
    })
  }
}

