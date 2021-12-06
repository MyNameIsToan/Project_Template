import { Component, OnInit } from "@angular/core";
import noUiSlider from "nouislider";
import Dropzone from "dropzone";
Dropzone.autoDiscover = false;
import Quill from "quill";
import Selectr from "mobius1-selectr";

@Component({
  selector: "app-components",
  templateUrl: "components.component.html",
  styleUrls:["./components.component.scss"]
})
export class FormsComponentsComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {}
}
