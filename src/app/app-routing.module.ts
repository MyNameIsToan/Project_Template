import { EditDataEditorComponent } from './pages/edit-data-editor/edit-data-editor.component';
import { DataAccessComponent } from './pages/data-access/data-access.component';
import { DataChangeComponent } from './pages/data-change/data-change.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "presentation",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "data-change",
        component: DataChangeComponent
      },
      {
        path: "data-access",
        loadChildren: "./pages/data-access/data-access.module#DataAccessModule"
      },
      {
        path: "edit-data",
        component: EditDataEditorComponent
      },
      {
        path: "components",
        loadChildren: "./pages/components/components.module#ComponentsModule"
      },
      {
        path: "settings",
        loadChildren: "./pages/settings/forms.module#FormsModules"
      },
      {
        path: "import-management",
        loadChildren: "./pages/import-management/tables.module#TablesModule"
      },
      {
        path: "report",
        loadChildren: "./pages/report/maps.module#MapsModule"
      },
      {
        path: "template-report",
        loadChildren: "./pages/template-report/widgets.module#WidgetsModule"
      },
      {
        path: "batch-management",
        loadChildren: "./pages/batch-management/charts.module#ChartsModule"
      },
      {
        path: "define-data",
        loadChildren: "./pages/define-data/calendar.module#CalendarModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
