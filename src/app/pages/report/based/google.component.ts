import { Component, OnInit } from "@angular/core";

declare const google: any;

@Component({
  selector: "app-google",
  templateUrl: "google.component.html",
  styleUrls:["./google.component.scss"]
})
export class GoogleComponent implements OnInit {
  Condition = 1;

  constructor() {}

  ngOnInit() {}

  ShowContent(){
    this.Condition = 1;
  }

  ShowParameter(){
    this.Condition = 2;
  }
}
