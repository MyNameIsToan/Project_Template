import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import { ClipboardModule } from "ngx-clipboard";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { RouterModule } from "@angular/router";
import { DataAccessRoutes } from "./data-access.rounting";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DataAccessRoutes),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ClipboardModule
  ]
})
export class DataAccessModule {}