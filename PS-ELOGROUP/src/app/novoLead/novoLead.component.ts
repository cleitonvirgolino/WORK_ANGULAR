import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ValidacaoService } from "../validacao.service";

@Component({
  selector: 'app-novoLead',
  templateUrl: './novoLead.component.html',
  styleUrls: ['./novoLead.component.css']
})
export class NovoLeadComponent implements OnInit {

  constructor(private validacao: ValidacaoService, private data: DataService) {}
  public resultado: string = "";
  public operacao: string = "";
  public historico: string = "";

  ngOnInit(): void {
    this.historico = this.data.completeMessage;
  }

  public cadastrar(): void {
    if (this.validacao.ehValidaExpressao(digito, this.resultado)) {
      this.resultado += digito;
    }
  }

  }

