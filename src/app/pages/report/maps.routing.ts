import { ParametersComponent } from './parameters/parameters.component';
import { Routes } from "@angular/router";

import { GoogleComponent } from "./based/google.component";
import { VectorComponent } from "./content/vector.component";

export const MapsRoutes: Routes = [
  {
    path: "",
    component: GoogleComponent
  },
  {
    path: "",
    children: [
      {
        path: "vector",
        component: VectorComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "paramters",
        component: ParametersComponent
      }
    ]
  }
];
