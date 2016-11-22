import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { PersonSearchComponent } from '../person/person-search.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private router: Router) { }

  title: string = "Angular 2 Person App";
}
