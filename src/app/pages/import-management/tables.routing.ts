import { Routes } from "@angular/router";

import { SortableComponent } from "./import-management/sortable.component";

export const TablesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sortable",
        component: SortableComponent
      }
    ]
  }
];
