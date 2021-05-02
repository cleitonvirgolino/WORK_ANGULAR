import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons'; 
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { PainelLeadsComponent } from './painelLeads/painelLeads.component';
import { NovoLeadComponent } from './novoLead/novoLead.component';
import { CadastroComponent } from './cadastro/cadastro.component';

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
