import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-access-right',
  templateUrl: './data-access-right.component.html',
  styleUrls: ['./data-access-right.component.scss']
})
export class DataAccessRightComponent implements OnInit {
  Condition = 1;
  constructor() { }

  ngOnInit(): void {
  }

  ShowReport(){
    this.Condition = 1;
  }

  ShowBatch(){
    this.Condition = 2;
  }

  ShowDataEditor(){
    this.Condition = 3;
  }

  ShowDataQuery(){
    this.Condition = 4;
  }

  ShowImportFile(){
    this.Condition = 5;
  }
}
