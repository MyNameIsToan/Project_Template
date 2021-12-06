import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-elements",
  templateUrl: "elements.component.html",
  styleUrls:["./elements.component.scss"]
})
export class ElementsComponent implements OnInit {
  Condition = 1;
  constructor() {}

  ngOnInit() {}

  ShowUserManagement(){
    this.Condition = 1;
  }

  ShowSecurity(){
    this.Condition = 2;
  }

  ShowEmail(){
    this.Condition = 3;
  }

  ShowSystemSetting(){
    this.Condition = 4;
  }
}
