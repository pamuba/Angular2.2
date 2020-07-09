"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        // let id = this.route.snapshot.params['id'];
        // this.departmentId = id;
        var _this = this;
        //params ob can detect any change in the route paramater
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.departmentId = id;
        });
    };
    DepartmentDetailComponent.prototype.goPrevious = function () {
        var previousId = this.departmentId - 1;
        this.router.navigate(['/departments', previousId]);
    };
    DepartmentDetailComponent.prototype.goNext = function () {
        var nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    };
    DepartmentDetailComponent.prototype.gotoDepartments = function () {
        var selectedId = this.departmentId ? this.departmentId : null;
        // this.router.navigate(['/departments', {id:selectedId, random:"random"}])
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route }); //move one path upwards..departments
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            template: "<h3>You Selected department with id = {{departmentId}}</h3>\n             <a (click)=\"goPrevious()\">Previous</a>\n             <a (click)=\"goNext()\">Next</a>\n             <p>\n               <button (click)=\"gotoDepartments()\">Back</button>\n             </p>"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map