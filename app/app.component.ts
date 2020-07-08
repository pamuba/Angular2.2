import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'my-app',
  template: `
                <h1>Parent App Component</h1>
                <label>Enter Parent App Coponent Value</label>
                <input type="text" #ptext (keyup)="0">
                <p>Value from the Child Component is:</p>
                {{childData}}
                <my-child (childEvent)="childData = $event" 
                [parentData]="ptext.value">
                </my-child>
                <employee-list></employee-list>
                <hr>
                <employee-detail></employee-detail>
             `,
  providers:[EmployeeService] //registering
})
export class AppComponent  { 
  public childData:string;
}
