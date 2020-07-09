import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

// import { EmployeeListComponent } from './employeeList.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { EmployeeTitlePipe} from './employeeTitle.pipe'
import { EmployeeDetailComponent } from './employee-detail.component'
import { routingComponents } from './app-routing.module'
import { SimpleComponent } from './simple.component'



@NgModule({
  imports:[ BrowserModule ,FormsModule, HttpModule,  AppRoutingModule ],
    
  declarations: [ AppComponent , SimpleComponent,routingComponents, EmployeeTitlePipe, EmployeeDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
