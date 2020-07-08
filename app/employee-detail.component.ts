import { Component } from '@angular/core'
import { EmployeeService } from './employee.service';

@Component({
    selector:`employee-detail`,
    template:`
        <h2>Employee List</h2>
        <ul *ngFor="let emp of employees">
            <li>{{emp.code}}  {{emp.name}} {{emp.dateOfBirth}}</li>
        </ul>
    `
})
export class EmployeeDetailComponent{

    employees:any = [];

    constructor(public _employeeService:EmployeeService){}

    ngOnInit(){
       this.employees  = this._employeeService.getEmployees()
    }
}