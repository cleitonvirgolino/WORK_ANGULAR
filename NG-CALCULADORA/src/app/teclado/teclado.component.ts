import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  clicar(valor:string):void{

    this.resultado += valor;
  }
  limpar(){
    this.resultado="";
  }
  finalizar(){
    this.resultado=eval(this.resultado);
  }

}
