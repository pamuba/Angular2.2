"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var department_list_1 = require("./department-list");
var employee_list_component_1 = require("./employee-list.component");
var department_detail_component_1 = require("./department-detail.component");
var home_component_1 = require("./home.component");
var page_componemt_1 = require("./page.componemt");
var routes = [
    { path: '', redirectTo: '/random', pathMatch: 'full' },
    { path: "random", component: department_list_1.DepartmentListComponent },
    { path: "employees", component: employee_list_component_1.EmployeeListComponent },
    { path: 'random/:id', component: department_detail_component_1.DepartmentDetailComponent },
    { path: '**', component: page_componemt_1.PageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [page_componemt_1.PageComponent, home_component_1.HomeComponent, department_list_1.DepartmentListComponent, employee_list_component_1.EmployeeListComponent, department_detail_component_1.DepartmentDetailComponent];
//# sourceMappingURL=app-routing.module.js.map