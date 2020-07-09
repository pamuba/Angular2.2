import { Component , Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core'

@Component({
    selector:'simple',
    template:'You entered: {{ simpleInput }}'
})
export class SimpleComponent{
    @Input() simpleInput:string;


    ngOnChanges(changes: SimpleChanges): void {
        for(let propertyName in changes){
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);

            console.log(propertyName+': currentValue = '+ current+ ', previousValue = '+previous);
        }
    }
    

    
}