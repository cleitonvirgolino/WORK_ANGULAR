import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { fromEventPattern } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { InformacoesModule } from './informacoes/informacoes.module';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    InformacoesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
