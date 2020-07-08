import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core'


@Component({
  selector: 'my-child',
  template: `
                <h1>Child  Component</h1>
                <label>Enter Child Coponent Value</label>
                <input type="text" #childtext
                 (keyup)="onChange(childtext.value)">
                <p>Value from the Parent App Component is:</p>
                {{parentData}}
             `,
  inputs:['parentData'],
  outputs:['childEvent'],
  providers:[] //registering
})
export class ChildComponent  {  
    public parentData:string;

    childEvent = new EventEmitter<string>();

    onChange(value:string){
        this.childEvent.emit(value);
    }
}
