import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-painelLeads',
  templateUrl: './painelLeads.component.html',
  styleUrls: ['./painelLeads.component.css']
})
export class PainelLeadsComponent implements OnInit {
  public resultado: string = "";
  public historico: string = "";

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.resultado = this.data.message;
    this.historico = this.data.completeMessage;
    if (this.resultado.trim() != "") {
      this.historico += this.resultado + "\r\n";
    }
  }
  
}
