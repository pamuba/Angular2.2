import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

// import { EmployeeListComponent } from './employeeList.component';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router' 
import { AppRoutingModule } from './app-routing.module'
import { EmployeeTitlePipe} from './employeeTitle.pipe'
import { ChildComponent } from './child.component'
import { EmployeeListComponent } from './employee-list.component'
import { EmployeeDetailComponent } from './employee-detail.component'


@NgModule({
  imports:      [ BrowserModule , HttpModule, AppRoutingModule ],
  declarations: [ AppComponent , EmployeeListComponent, EmployeeTitlePipe, ChildComponent, EmployeeDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
