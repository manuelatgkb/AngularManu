import { TipoclienteListaComponent } from './../tipocliente-lista/tipocliente-lista.component';
import { TipoclienteService } from './../services/tipocliente.service';
import { ClienteCadastroComponent } from './../cliente-cadastro/cliente-cadastro.component';
import { TiposClienteComponent } from './../tipocliente-cadastro/tipos-cliente.component';
import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ClientRequest } from 'http';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  lista:Cliente[]

  constructor(private clienteService:ClienteService) {
    this.lista = [];
    this.listar();
   }
  ngOnInit(): void {
  }
  private listar(){
    this.clienteService.listar().subscribe((clientes)=>this.lista=clientes);
  }

}
