import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-novoLead',
  templateUrl: './novoLead.component.html',
  styleUrls: ['./novoLead.component.css']
})
export class NovoLeadComponent implements OnInit {

  constructor(private data: DataService) {}

  ngOnInit(): void {
  }
}