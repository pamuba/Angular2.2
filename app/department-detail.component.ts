import  { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router, Params } from '@angular/router'


@Component({
    selector:'employee-detail',
    template:`<h3>You Selected department with id = {{departmentId}}</h3>
             <a (click)="goPrevious()">Previous</a>
             <a (click)="goNext()">Next</a>`
})
export class DepartmentDetailComponent implements OnInit{

    private departmentId:any;

    constructor(private route:ActivatedRoute, private router:Router) {}

    ngOnInit(){ 
        // let id = this.route.snapshot.params['id'];
        // this.departmentId = id;

        //params ob can detect any change in the route paramater
        this.route.params.subscribe((params:Params)=>{
            let id = parseInt(params['id']);
            this.departmentId = id;
        })
    }
    goPrevious(){
        let previousId = this.departmentId - 1;
        this.router.navigate(['/departments', previousId]);
    }
    goNext(){
        let nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    }
}