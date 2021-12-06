import { Component, OnInit, AfterViewInit, NgZone, Inject,  PLATFORM_ID} from "@angular/core";
import List from "list.js";

@Component({
  selector: "app-widgets",
  templateUrl: "widgets.component.html",
  styleUrls: ["./widgets.component.scss"]
})
export class WidgetsComponent implements OnInit{

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
