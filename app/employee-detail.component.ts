import { Component, OnInit,  } from '@angular/core'
import { EmployeeService } from './employee.service';
import { Http } from '@angular/http';


@Component({
    selector:`employee-detail`,
    template:`
        <h2>Employee List</h2>
        <ul *ngFor="let emp of employees">
            <li>{{emp.code}}  {{emp.name}} {{emp.dateOfBirth}}</li>
        </ul>
    `,
    providers:[
        
    ]
})
export class EmployeeDetailComponent implements OnInit{

    employees:any = [];

    constructor(public _employeeService:EmployeeService){}

    ngOnInit(){
        this._employeeService.getEmployees()
            .subscribe((resEmployeeData) =>  {this.employees = resEmployeeData})
    }
}