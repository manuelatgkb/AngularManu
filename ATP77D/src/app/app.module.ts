import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { TiposClienteComponent } from './tipocliente-cadastro/tipos-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    TiposClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
