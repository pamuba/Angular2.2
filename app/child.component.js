"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    ChildComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'my-child',
            template: "\n                <h1>Child  Component</h1>\n                <label>Enter Child Coponent Value</label>\n                <input type=\"text\" #childtext\n                 (keyup)=\"onChange(childtext.value)\">\n                <p>Value from the Parent App Component is:</p>\n                {{parentData}}\n             ",
            inputs: ['parentData'],
            outputs: ['childEvent'],
            providers: [] //registering
        })
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map