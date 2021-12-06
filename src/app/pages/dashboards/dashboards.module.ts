import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from "./dashboard/dashboard.component";

import { RouterModule } from "@angular/router";
import { DashboardsRoutes } from "./dashboards.routing";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forChild(DashboardsRoutes)
  ],
  exports: [DashboardComponent]
})
export class DashboardsModule {}
