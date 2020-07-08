"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <!--\n                <h1>Parent App Component</h1>\n                <label>Enter Parent App Coponent Value</label>\n                <input type=\"text\" #ptext (keyup)=\"0\">\n                <p>Value from the Child Component is:</p>\n                {{childData}}\n                <my-child (childEvent)=\"childData = $event\" \n                [parentData]=\"ptext.value\">\n                </my-child>\n                <employee-list></employee-list>\n                <hr>\n                <employee-detail></employee-detail>\n                -->\n\n                <h1>Routing Application</h1>\n                <nav>\n                  <a routerLink=\"/departments\" routerLinkActive=\"active\">Departments</a>\n                  <a routerLink=\"/employees\" routerLinkActive=\"active\">Employees</a>\n                </nav>\n                <router-outlet></router-outlet>\n             ",
            providers: [employee_service_1.EmployeeService] //registering
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map