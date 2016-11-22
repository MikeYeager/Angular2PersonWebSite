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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var person_service_1 = require('../../services/person.service');
var PersonSearchComponent = (function () {
    function PersonSearchComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        this.searchText = '';
    }
    PersonSearchComponent.prototype.search = function () {
        var _this = this;
        this.personService
            .searchPeople(this.searchText)
            .then(function (result) { return _this.people = result; });
    };
    PersonSearchComponent.prototype.onSelect = function (selectedPerson) {
        this.selectedPerson = selectedPerson;
        var link = ['/detail', this.selectedPerson.Id];
        this.router.navigate(link);
    };
    PersonSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'person-search.component.html',
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
    ], PersonSearchComponent);
    return PersonSearchComponent;
}());
exports.PersonSearchComponent = PersonSearchComponent;
//# sourceMappingURL=person-search.component.js.map