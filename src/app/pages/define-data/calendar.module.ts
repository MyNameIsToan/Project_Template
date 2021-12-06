import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { RouterModule } from "@angular/router";
import { CalendarRoutes } from "./calendar.routing";

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CalendarRoutes),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    ModalModule.forRoot()
  ]
})
export class CalendarModule {}
