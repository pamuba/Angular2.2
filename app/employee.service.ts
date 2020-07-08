import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import  'rxjs/add/operator/map'

@Injectable()
export class EmployeeService{

    constructor(public _http:Http){
    }

    private _url:string = "apidata/employeedata.json"
    getEmployees(){
        return this._http.get(this._url)
                    .map((response:Response) => response.json());
      
    }
}