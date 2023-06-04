import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiltrationComponent } from './filtration/filtration.component';

const routes: Routes = [
  {path:"",redirectTo:"employees",pathMatch:"full"},
  {path:"employees",component:EmployeesComponent,title:"all Employees"},
  // {path:"filtration",component:FiltrationComponent,title:"filter"},




{path:"**",component:NotFoundComponent,title:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
