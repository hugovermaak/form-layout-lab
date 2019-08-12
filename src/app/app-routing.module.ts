import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlexComponent } from "./flex/flex.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "flex-form",
    pathMatch: "full"
  },
  {
    path: "flex-form",
    component: FlexComponent
  },
  {
    path: "table-form",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
