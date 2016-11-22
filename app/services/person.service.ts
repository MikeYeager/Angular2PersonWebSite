import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Person } from '../classes/person'

@Injectable()
export class PersonService {
    constructor(private http: Http) { }

    private uri: string = "http://localhost:5000/api/person";

    searchPeople(searchString: string): Promise<Person[]> {
        return this.http
            .get(this.uri + "/" + searchString)
            .toPromise()
            .then(response =>
                response.json() as Person[])
            .catch(this.handleError);
    }

    getPerson(personId: string): Promise<Person> {
        return this.http
            .get(this.uri + "/" + personId)
            .toPromise()
            .then(response =>
                response.json() as Person)
            .catch(this.handleError);
    }

    savePerson(personToSave: Person): Promise<string> {
        return this.http
            .post(this.uri, personToSave)
            .toPromise()
            .then(response => response.statusText)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.message
            ? error.message
            : error.status
                ? '${error.status} - ${error.statusText}'
                : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
