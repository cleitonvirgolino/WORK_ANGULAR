import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons'; 
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { PainelLeadsComponent } from './painel-leads/painel-leads.component';
import { NovoLeadComponent } from './novo-lead/novo-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PainelLeadsComponent,
    NovoLeadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
