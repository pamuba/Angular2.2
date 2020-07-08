import { Component } from '@angular/core';


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
             `,
  providers:[] //registering
})
export class AppComponent  { 
  public childData:string;
}
