import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../../classes/person'
import { PersonService } from '../../services/person.service'

@Component({
    moduleId: module.id,
    selector: 'person-edit',
    templateUrl: 'person-edit.component.html',
    providers: [PersonService]
})
export class PersonEditComponent implements OnInit {
    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location) { }

    person: Person;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.personService
                .getPerson(id)
                .then(result => this.person = result);
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.personService
            .savePerson(this.person)
            .then(result => {
                console.log(result);
                if (result === "OK") this.goBack();
            });
    }
}
