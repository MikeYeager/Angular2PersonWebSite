import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../../classes/person'
import { PersonService } from '../../services/person.service'

@Component({
    moduleId: module.id,
    templateUrl: 'person-search.component.html',
    providers: [PersonService]
})
export class PersonSearchComponent {
    constructor(private personService: PersonService, private router: Router) { }

    searchText: string = '';
    people: Person[];
    selectedPerson: Person;

    search(): void {
        this.personService
            .searchPeople(this.searchText)
            .then(result => this.people = result);
    }

    onSelect(selectedPerson: Person): void {
        this.selectedPerson = selectedPerson;

        let link = ['/detail', this.selectedPerson.Id];
        this.router.navigate(link);
    }
}
