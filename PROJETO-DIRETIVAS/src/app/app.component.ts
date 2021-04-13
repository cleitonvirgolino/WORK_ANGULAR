import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private _title="CURSO DE DIRETIVAS";  
private _cursos = [" Ciência da Computação "," Arquitetura "," Jornalismo "," Letras "];
private _professores = [" Charles "," Loutfi "," Ricardo "," Silvio "];

public get title() {
  return this._title;
}
public get cursos(){
  return this._cursos;
}
public get professores(){
  return this._professores;
}
}
