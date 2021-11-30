import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlacaCarroPipe } from './placa-carro.pipe';
import { PlacaCarroMercosulPipe } from './placa-carro-mercosul.pipe';
import { TelefoneBrPipe } from './telefone-br.pipe';
import { NomeABNTPipe } from './nome-abnt.pipe';
import { TelefoneUSPipe } from './telefone-us.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlacaCarroPipe,
    PlacaCarroMercosulPipe,
    TelefoneBrPipe,
    NomeABNTPipe,
    TelefoneUSPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
