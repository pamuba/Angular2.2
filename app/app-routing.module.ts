import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DepartmentListComponent } from './department-list'
import { EmployeeListComponent } from './employee-list.component'
import { DepartmentDetailComponent } from './department-detail.component'
import { HomeComponent } from './home.component'
import { PageComponent } from './page.componemt'


const routes: Routes= [
    
    {path:'', redirectTo:'/random', pathMatch:'full'},
    {path:"random", component:DepartmentListComponent},
    {path:"employees", component:EmployeeListComponent},
    {path:'random/:id', component:DepartmentDetailComponent},
    {path:'**', component:PageComponent}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [PageComponent, HomeComponent, DepartmentListComponent,EmployeeListComponent, DepartmentDetailComponent]
