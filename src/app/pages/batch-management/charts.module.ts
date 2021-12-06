import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsComponent } from "./charts.component";
import { PaginationModule } from "ngx-bootstrap/pagination";


import { RouterModule } from "@angular/router";
import { ChartsRoutes } from "./charts.routing";

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, PaginationModule.forRoot(),RouterModule.forChild(ChartsRoutes)]
})
export class ChartsModule {}
