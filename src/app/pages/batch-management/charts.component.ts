import { Component, OnInit } from "@angular/core";
import List from "list.js";

@Component({
  selector: "app-charts",
  templateUrl: "charts.component.html",
  styleUrls:["./charts.component.scss"]
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new List(document.getElementById("first-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("second-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("third-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
  }
}
