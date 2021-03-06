import { Component, OnInit } from '@angular/core'
import { EmployeeService } from './employee.service';

@Component({
    selector:`employee-list`,
    template:`
        <h2>Employee List</h2>
        <ul *ngFor="let emp of employees">
            <li>{{emp.name}}</li>
        </ul>
    `
})
export class EmployeeListComponent implements OnInit{

    employees:any = [];

    constructor(public _employeeService:EmployeeService){}

    ngOnInit(){
       this._employeeService.getEmployees()
            .subscribe((resEmployeeData) =>  {this.employees = resEmployeeData})
    }
}