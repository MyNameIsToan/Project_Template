import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { RouterModule } from "@angular/router";
import { MapsRoutes } from "./maps.routing";
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { GoogleComponent } from "./based/google.component";
import { VectorComponent } from "./content/vector.component";
import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
  declarations: [GoogleComponent, VectorComponent, ParametersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    ComponentsModule,
    DxVectorMapModule,
    DxPieChartModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule
  ]
})
export class MapsModule {}
