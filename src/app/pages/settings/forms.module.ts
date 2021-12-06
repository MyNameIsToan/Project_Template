import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TagInputModule } from "ngx-chips";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { FormsComponentsComponent } from "./components/components.component";
import { ElementsComponent } from "./elements/elements.component";
import { ValidationComponent } from "./validation/validation.component";

import { RouterModule } from "@angular/router";
import { FormsRoutes } from "./forms.routing";
import { EmailComponent } from './email/email.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
@NgModule({
  declarations: [
    FormsComponentsComponent,
    ElementsComponent,
    ValidationComponent,
    EmailComponent,
    SystemSettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    TagInputModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class FormsModules {}
