import { SystemSettingComponent } from './system-setting/system-setting.component';
import { EmailComponent } from './email/email.component';
import { Routes } from "@angular/router";

import { FormsComponentsComponent } from "./components/components.component";
import { ElementsComponent } from "./elements/elements.component";
import { ValidationComponent } from "./validation/validation.component";

export const FormsRoutes: Routes = [
  {
    path: "",
    component: ElementsComponent
  },
  {
    path: "",
    children: [
      {
        path: "components",
        component: FormsComponentsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "validation",
        component: ValidationComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "email",
        component: EmailComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "setting",
        component: SystemSettingComponent
      }
    ]
  }
];
