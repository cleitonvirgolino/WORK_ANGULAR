import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./cadastro/cadastro.component";
import { NovoLeadComponent } from "./novoLead/novoLead.component";
import { PainelLeadsComponent } from "./painelLeads/painelLeads.component";


const routes: Routes = [
  { path: "cadastro", component: CadastroComponent },
  { path: "novoLead", component: NovoLeadComponent },
  { path: "painelLeads", component: PainelLeadsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
