import { Component } from '@angular/core'
import { Router } from '@angular/router'


@Component({
    selector:'department-list',
    template:`<h3>Department List</h3>
    <ul class="items">
        <li (click)="onSelect(dep)" *ngFor="let dep of departments">
            <span class="badge">{{dep.id}}</span>{{dep.name}}
        </li>
    </ul>`
})
export class DepartmentListComponent{

    constructor(private router:Router){}

    departments:any = [
        {"id":1, "name":"Angular"},
        {"id":2, "name":"Node"},
        {"id":3, "name":"MongoDB"},
        {"id":4, "name":"Ruby"},
        {"id":5, "name":"Python"},
        {"id":6, "name":"React"},
    ]
    onSelect(department:any){
        this.router.navigate(['/departments', department.id])
    }
}