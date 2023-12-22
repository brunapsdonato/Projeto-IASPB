export class Usuario {

  public id: string;
  public Documento: number | undefined;
  public dataNasc: number | undefined;
  public nome: string | undefined;
  public servicoUtilizado: string | undefined;

  constructor(id: string, usuario: Usuario | undefined) {
    this.id = id;
    this.Documento = usuario?.Documento;
    this.dataNasc = usuario?.dataNasc;
    this.nome = usuario?.nome;
    this.servicoUtilizado = usuario?.servicoUtilizado;
  }
}
