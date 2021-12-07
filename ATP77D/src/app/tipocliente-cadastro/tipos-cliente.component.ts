import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-cliente',
  templateUrl: './tipos-cliente.component.html',
  styleUrls: ['./tipos-cliente.component.css']
})
export class TiposClienteComponent implements OnInit {
  id: number = 0;
  nome: String = "";
  descricao: String = "";
  tipoclienteService: any;

  constructor() { }

  ngOnInit(): void {
  }
  salvar(){
    let tipocliente = {
      "id": this.id,
      "nome": this.nome,
      "descricao": this.descricao,
    };

    console.log(tipocliente)
    this.tipoclienteService.salvar(tipocliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.nome = "";
    this.descricao = "";
  }

}
