import { Component, OnInit,  } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
    selector:'department-list',
    template:`<h3>Department List</h3>
    <ul class="items">
        <li (click)="onSelect(dep)"  [class.selected]="isSelected(dep)"  *ngFor="let dep of departments">
            <span class="badge">{{dep.id}}</span>{{dep.name}}
        </li>
    </ul>`
})
export class DepartmentListComponent implements OnInit{

    private selectedId:any;

    constructor(private router:Router, private route:ActivatedRoute){}


    ngOnInit(){ 
        this.route.params.subscribe((params:Params)=>{
            let id = parseInt(params['id']);
            this.selectedId = id;
        })
    }

    
    departments:any = [
        {"id":1, "name":"Angular"},
        {"id":2, "name":"Node"},
        {"id":3, "name":"MongoDB"},
        {"id":4, "name":"Ruby"},
        {"id":5, "name":"Python"},
        {"id":6, "name":"React"},
    ]
    onSelect(department:any){
        // this.router.navigate(['/departments', department.id])
        this.router.navigate([department.id],{relativeTo:this.route})
    }

    isSelected(dep:any){
        return dep.id == this.selectedId;
    }
}