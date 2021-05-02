import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-painelLeads',
  templateUrl: './painelLeads.component.html',
  styleUrls: ['./painelLeads.component.css']
})
export class PainelLeadsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
}

