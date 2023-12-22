export class Voluntario {

  public id: string;
  public contato: string | undefined;
  public dataNasc: number | undefined;
  public nome: string | undefined;
  public funcao: string | undefined;

  constructor(id: string, voluntario: Voluntario | undefined) {
    this.id = id;
    this.contato = voluntario?.contato;
    this.dataNasc = voluntario?.dataNasc;
    this.nome = voluntario?.nome;
    this.funcao = voluntario?.funcao;
  }
}
